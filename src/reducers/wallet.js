import { GET_API, GET_DESPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 187.12,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_DESPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.state, id: state.expenses.length, exchangeRates: state.currencies }],
    };
  default:
    return state;
  }
};

export default wallet;
