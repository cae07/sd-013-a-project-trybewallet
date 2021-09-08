import { WALLET_FORM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_FORM:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
