// Coloque aqui suas actions
import { GET_EXCHANGE_RATE, ADD_USER, IS_FETCHING, ADD_EXPENSE } from './actionTypes';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getExchangeRate = (payload) => ({
  type: GET_EXCHANGE_RATE,
  payload,
});

export const isFetching = () => ({
  type: IS_FETCHING,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getApiInfo = () => (dispatch) => {
  dispatch(isFetching());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      return dispatch(getExchangeRate(data));
    });
};
