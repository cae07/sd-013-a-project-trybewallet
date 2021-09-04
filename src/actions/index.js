// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function setUserEmail(payload) {
  return {
    type: 'VALID_EMAIL',
    payload,
  };
}

export function setExpenses(payload) {
  return {
    type: 'SET_EXPENSES',
    payload,
  };
}

function getCurrencies(payload) {
  return { type: GET_CURRENCIES, payload };
}

function requestCurrencies() {
  return { type: REQUEST_CURRENCIES };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    try {
      dispatch(getCurrencies(json));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
