import { API_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_CURRENCIES:
    return ({
      ...state, currencies: action.payload,
    });
  default: return state;
  }
};

export default wallet;
