// Coloque aqui suas actions
import fetchCurrencies from '../utils/utils';

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
  return { type: 'SET_EXPENSES', payload };
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

export function setCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      const response = await fetchCurrencies();
      // const json = response.json();
      dispatch(getCurrencies(response));
      return response;
    } catch (error) {
      dispatch(failedRequest(error.message));
      throw error;
    }
  };
}
