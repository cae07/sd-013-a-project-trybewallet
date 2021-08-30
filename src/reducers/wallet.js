import { SAVE_DESPESA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DESPESA:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
