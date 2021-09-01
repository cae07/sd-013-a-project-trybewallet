// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXCHANGE_RATE, IS_FETCHING,
  ADD_EXPENSE, REFRESH_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXCHANGE_RATE:
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };

  case IS_FETCHING:
    return {
      ...state,
      isFetching: true,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case REFRESH_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
