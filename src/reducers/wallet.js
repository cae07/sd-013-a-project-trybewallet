// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, FAILED_REQUEST, GET_RATES, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_CURRENCIES:
    return { ...state, currencies: payload };
  case FAILED_REQUEST:
    return { ...state, error: payload };
  case GET_RATES:
    return { ...state, expenses: [...state.expenses, { ...payload }] };
  case REMOVE_EXPENSE:
    return { ...state, expenses: payload };
  default:
    return state;
  }
};

export default wallet;
