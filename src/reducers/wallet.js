import { SET_TOTAL_VALUE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TOTAL_VALUE:
    return {
      ...state,
      total: action.total,
    };
  default:
    return state;
  }
};

export default wallet;
