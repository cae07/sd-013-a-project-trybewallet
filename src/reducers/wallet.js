import { REQUEST_CURRENCIES, RECEIVE_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.data };
  default:
    return state;
  }
};

export default wallet;
