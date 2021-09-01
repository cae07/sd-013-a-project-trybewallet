import { USER, REQUEST_API, DELETE_EXPENSE } from './actionTypes';

export const userAction = (email) => ({
  type: USER,
  payload: email,
});

const requestApi = (json, state) => ({
  type: REQUEST_API,
  payload: json,
  state,
});

// ==== thunk ====
export function fetchApi(state) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(requestApi(json, state)));
}

export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});
