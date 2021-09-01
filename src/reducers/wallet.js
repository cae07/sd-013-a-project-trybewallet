import { WALLET } from '../actions';

const WALLET_INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INICIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: action.wallet.currencies,
      expenses: action.wallet.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
