import {
  SIGN_IN,
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_REQUEST,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from './actionTypes';

function requestCurrencies() {
  return { type: REQUEST_CURRENCIES };
}

function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

function getCurrencies(json) {
  return {
    type: GET_CURRENCIES,
    payload: json,
  };
}

export function signIn(email) {
  return {
    type: SIGN_IN,
    payload: email,
  };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getCurrencies(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

function newExpense(expense) {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  };
}

export function addExpense(expense) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const completeExpense = {
          ...expense,
          exchangeRates: json,
        };
        dispatch(newExpense(completeExpense));
      });
  };
}

export function removeExpense(id) {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
}
