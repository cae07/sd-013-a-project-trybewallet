// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  UPDATE_EXPENSES,
} from '../constants';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_ACTION:
    return {
      ...state,
      isLoading: true,
    };

  case LOADING_ACTION_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case LOADING_ACTION_FAIL:
    return {
      ...state,
      error: action.payload.error,
      loading: false,
    };

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};

export default wallet;
