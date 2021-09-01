import { TOTAL_FIELD } from '../actions/actionTypes';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    total: 0,
  },

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_FIELD:
    return {
      ...state,
      total: action,
    };
  default:
    return state;
  }
};

export default wallet;
