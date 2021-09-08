// import { getCurrencesCambio } from '../services/currencesAPI';
const CURRENCES_API = 'https://economia.awesomeapi.com.br/json/all';

export const LOGIN = 'LOGIN';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const WALLET_SUCCESS = 'WALLET_SUCCESS';
export const WALLET_ERROR = 'WALLET_ERROR';
export const EXPENSES_LOADING = 'EXPENSES_LOADING';
export const EXCHANGE_SUCCESS = 'EXCHANGE_SUCCESS';
export const EXCHANGE_ERROR = 'EXCHANGE_ERROR';
export const EXPENSES = 'EXPENSES';

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
    .then((response) => response.json())
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

export const requestExchangeLoading = () => ({
  type: REQUEST_LOADING,
  isExchangeLoading: true,
});

export const requestExchangeSuccess = (expenses) => ({
  type: EXCHANGE_SUCCESS,
  expenses,
  isExchangeLoading: false,
});

export const requestExchangeError = (error) => ({
  type: EXCHANGE_ERROR,
  payload: error,
});

// source: https://github.com/tryber/sd-013-a-project-trybewallet/pull/85/commits/26a7724fb33c00509cfb1a908c7594c8dec40693

export const fetchExchangeRatesAction = (expense) => (dispatch) => (
  fetch(`${CURRENCES_API}`)
    .then((response) => response.json())
    .then((currenciesResponse) => {
      const expenses = {
        ...expense,
        exchangeRates: Object.fromEntries(
          Object.entries(currenciesResponse).filter(([key]) => !(key.includes('USDT'))),
        ),
      };
      return dispatch(requestExchangeSuccess(
        expenses,
      ));
    })
);
