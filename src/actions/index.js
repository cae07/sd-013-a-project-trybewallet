import { REQUEST_QUOTATION, REQUEST_CURRENCIES,
  RECEIVED_QUOTATION, RECEIVED_CURRENCIES, FETCH_ERROR, LOGIN_FORM } from './actionTypes';

export const actionSendLoginFormData = (payload) => ({
  type: LOGIN_FORM,
  payload,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const requestQuotation = () => ({
  type: REQUEST_QUOTATION,
});

export const receivedCurrencies = (currencies) => ({
  type: RECEIVED_CURRENCIES,
  currencies,
});

const receiveQuotation = (currencyTypes,
  { currency, description, id, method, tag, value }) => ({
  type: RECEIVED_QUOTATION,
  currency,
  currencyTypes,
  description,
  id,
  method,
  tag,
  value,
});

const errorFetch = (error) => ({
  type: FETCH_ERROR,
  error,
});

export function actionRequestCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receivedCurrencies(currencies)))
      .catch((error = 'Falha na requisição') => dispatch(errorFetch(error)));
  };
}

export function actionRequestQuotation(state) {
  return (dispatch) => { // thunk declarado
    dispatch(requestQuotation());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencyTypes) => dispatch(receiveQuotation(state, currencyTypes)))
      .catch((error = 'Falha na requisição') => dispatch(errorFetch(error)));
  };
}
