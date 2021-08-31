// User
// -------------------------------------------------
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const loginSubmit = (email) => (
  { type: LOGIN_SUBMIT, payload: email }
);
// -------------------------------------------------

// Wallet
// -------------------------------------------------

export const REQUEST_API = 'REQUEST_API';
export const GET_INFO = 'GET_INFO';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const FILL_LIST_CURRENCIES = 'FILL_LIST_CURRENCIES';

export const requestApi = () => ({ type: REQUEST_API });
export const getInfo = (json) => ({ type: GET_INFO, payload: json });
export const fillListCurrencies = () => ({ type: FILL_LIST_CURRENCIES });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

// função assincrona para chamar as actions
export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestApi());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then(
        (json) => dispatch(getInfo(json)),
        (error) => dispatch(failedRequest(error)),
      ));
};
