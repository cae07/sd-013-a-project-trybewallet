// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ACTION_API_SUCCESS,
  ACTION_API_REJECT,
  ACTION_GET_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_API_SUCCESS:
    return { ...state, currencies: [...action.payload] };
  case ACTION_API_REJECT:
    return { ...state, error: action.error };
  case ACTION_GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses, exchangeRates: action.data }],
    };
  default:
    return state;
  }
};

export default wallet;
