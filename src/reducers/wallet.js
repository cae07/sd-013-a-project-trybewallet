import { WALLET, ADD_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: action,
      expenses: action,
    };
  case ADD_CURRENCIES:
    return { ...state,
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default user;
