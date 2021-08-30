// Coloque aqui suas actions
import { GET_EXCHANGE_RATE, ADD_USER } from './actionTypes';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getExchangeRate = (payload) => ({
  type: GET_EXCHANGE_RATE,
  payload,
});
