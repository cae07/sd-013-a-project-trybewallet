import { WALLET_ACTION } from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return { ...state,
      expenses: [...state.expenses, action.currentWalletState],
    };
  default:
    return state;
  }
};

export default walletReducer;
