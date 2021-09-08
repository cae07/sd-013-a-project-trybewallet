import {
  ADD_EXPENSES,
  GET_CURRENCIES, REQUEST_CURRENCIES, SAVE_EMAIL } from './actionsType';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getCurrencies = (json) => ({
  type: GET_CURRENCIES,
  json,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return dispatch(getCurrencies(json));
  };
}

// Continuação do Requisito 7 e 8 'src/reducers/wallet.js'
