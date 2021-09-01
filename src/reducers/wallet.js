import { REQUEST_API, DELETE_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.state, exchangeRates: action.payload }],
    };

  case DELETE_EXPENSE: {
    return {
      ...state,
      expenses: action.expenses,
    };
  }
  default:
    return state;
  }
}

export default wallet;
