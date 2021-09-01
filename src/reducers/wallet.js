// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXCHANGE_RATE, IS_FETCHING,
  REFRESH_EXPENSES, EDIT_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  editExpanse: {
    editing: false,
    expense: {},
  },
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

  case REFRESH_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editExpanse: action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
