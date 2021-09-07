// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  FAILED_CURRENCY,
  GET_CURRENCY,
  REQUEST_CURRENCY } from '../actions';

// Cria um estado inicial para o reducer 'wallet'
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

// Cria um reducer wallet
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  // Esse caso troca o propriedade 'isFetching' para true
  case REQUEST_CURRENCY:
    return { ...state, isFetching: true };
  case GET_CURRENCY:
    return { ...state, currencies: Object.keys(action.payload), isFetching: false };
  case FAILED_CURRENCY:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default wallet;
