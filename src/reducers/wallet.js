// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { REQUEST_API } from '../actions/actionTypes';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.wallet.expenses.length,
          ...action.state,
          exchangeRates: action.payload }],
    };
  default:
    return state;
  }
}

export default wallet;
