import {
  SUCCESS_TYPE,
  ERROR_TYPE,
  LOADING_TYPE,
  ADD_EXPENSES,
  DELETE_PAYMENT,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_TYPE:
    return {
      ...state,
      isLoading: true,
    };
  case SUCCESS_TYPE:
    return {
      ...state,
      currencies: action.payload,
    };
  case ERROR_TYPE:
    return {
      ...state,
      error: 'error 404',
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        {
          ...action.payload,
          id: state.expenses.length,
        }],
      error: '',
    };
  case DELETE_PAYMENT:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default walletReducer;
