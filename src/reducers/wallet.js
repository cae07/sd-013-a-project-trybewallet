// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API_SUCCESSFUL, REQUEST_API,
  REQUEST_API_FAILED, SAVE_CURRENCIES_INFO,
  UPDATE_EXPENSES, SET_EXPENSE_TO_EDIT,
} from '../actions';

const INITIAL_STATE = {
  expenseToEdit: {},
  idNewItem: 0,
  currencies: [],
  expenses: [],
  isLoading: false,
  error: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES_INFO:
    return {
      ...state,
      currencies: action.payload,
    };
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESSFUL:
    return {
      ...state,
      idNewItem: state.idNewItem + 1,
      isLoading: false,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_API_FAILED:
    return {
      ...state,
      isLoading: false,
      error: true,
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case SET_EXPENSE_TO_EDIT:
    return {
      ...state,
      expenseToEdit: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
