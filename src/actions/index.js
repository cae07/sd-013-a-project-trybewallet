// import { getCurrencesCambio } from '../services/currencesAPI';
const CURRENCES_API = 'https://economia.awesomeapi.com.br/json/all';

export const LOGIN = 'LOGIN';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const WALLET_SUCCESS = 'WALLET_SUCCESS';
export const WALLET_ERROR = 'WALLET_ERROR';

export const loginAction = (email) => ({
  type: LOGIN,
  payload: email,
});

export const requestWalletLoading = () => ({
  type: REQUEST_LOADING,
  isFetching: true,
});

export const requestWalletSuccess = (currencies, expenses) => ({
  type: WALLET_SUCCESS,
  wallet: {
    currencies,
    expenses,
  },
  isFetching: false,
});

export const requestWalletError = (error) => ({
  type: WALLET_ERROR,
  payload: error,
});

export const fetchCurrencesAction = () => (dispatch) => {
  dispatch(requestWalletLoading());
  return fetch(`${CURRENCES_API}`)
    .then((response) => response.json()
      .then((result) => (result)))
    .then((currencesResponse) => dispatch(
      requestWalletSuccess(
        Object.keys(currencesResponse).filter((key) => {
          if (key === 'USDT') {
            return false;
          } return true;
        }),
      ),
    ));
};
