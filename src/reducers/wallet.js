// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_WALLET_SUCCESS, SET_EXPENSES, SET_SUM,
  SET_LOADING } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  sum: 0,
  isLoading: false,
};

const getWalletResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_SUCCESS:
    return { ...state,
      currencies: action.payload };

  case SET_EXPENSES:
    return { ...state, ...state.expenses.push(action.payload) };

  case SET_SUM:
    return { ...state, sum: state.sum + action.payload };

  case SET_LOADING:
    return { ...state, isLoading: action.payload };

  default:
    return state;
  }
};

export default getWalletResults;
