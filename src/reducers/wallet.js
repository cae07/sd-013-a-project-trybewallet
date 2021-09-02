import { WALLET_SUCCESS, WALLET_ERROR } from '../actions';

const WALLET_INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INICIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_SUCCESS:
    return {
      ...state,
      currencies: action.wallet.currencies,
    };
  case WALLET_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
