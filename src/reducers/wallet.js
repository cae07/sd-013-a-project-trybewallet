// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_WALLET_SUCCESS } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const getWalletResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_SUCCESS:
    return { ...state,
      currencies: action.payload };

  default:
    return state;
  }
};

export default getWalletResults;
