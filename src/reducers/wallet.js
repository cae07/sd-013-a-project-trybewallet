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

const setTotal = (expenses, { value, exchangeRates, currency }) => {
  const reduce = expenses.reduce((acc, curr) => (
    acc + parseFloat(curr.value) * parseFloat(curr.exchangeRates[curr.currency].ask)
  ), 0);

  const total = reduce + parseFloat(value) * parseFloat(exchangeRates[currency].ask);

  return total;
};

const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case LOADING_ACTION:
    return {
      ...state,
      isLoading: true,
    };

  case LOADING_ACTION_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(payload),
    };

  case LOADING_ACTION_FAIL:
    return {
      ...state,
      error: payload.error,
      loading: false,
    };

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      total: setTotal(state.expenses, payload).toFixed(2),
    };

  default:
    return state;
  }
};

export default wallet;
