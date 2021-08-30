import { ENTER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ENTER_EMAIL:
    return ({
      ...state, email: action.email,
    });
  default: return state;
  }
};

export default wallet;
