// Coloque aqui suas actions

import {
  LOGIN,
  ADD_EXPENSE,
  /* SET_EXPENSE,
  EDIT_EXPENSE, */
  ERROR_EXPENSE }
  from './actionTypes';

const login = (email) => ({
  type: LOGIN,
  email,
});

const addExpenseAction = (despesaAtual, currencies) => ({
  type: ADD_EXPENSE,
  despesaAtual,
  currencies,
});

/* const setExpenseAction = (expenses) => ({
  type: SET_EXPENSE,
  expenses,
});

const editExpenseAction = (expenses) => ({
  type: EDIT_EXPENSE,
  expenses,
}); */

const addExpenseActionError = (expenses) => ({
  type: ERROR_EXPENSE,
  expenses,
});

async function fetchcurrencies() {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

const addExpenseThunk = (despesaAtual) => (
  (dispatch) => {
    fetchcurrencies()
      .then((response) => dispatch(addExpenseAction(despesaAtual, response)))
      .catch((error) => dispatch(addExpenseActionError(error)));
  }
);

export { login, addExpenseThunk };
