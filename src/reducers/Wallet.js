// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
/* const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
} */

import {
  ADD_EXPENSE,
  ERROR_EXPENSE,
  SET_EXPENSE,
  EDIT_EXPENSE }
  from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerDespesas = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      currencies: action.currencies,
      expenses: [...state.expenses, {
        ...action.despesaAtual,
        exchangeRates: action.currencies,
      }],
    };

  case SET_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };

  case ERROR_EXPENSE:
    return {
      ...state,
      error: action.error,
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      ...action.expenses,
    };

  default:
    return state;
  }
};

export default reducerDespesas;
