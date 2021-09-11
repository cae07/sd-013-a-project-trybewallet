// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  UPDATE_EXPENSES,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  IS_EDITING,
} from '../constants';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  error: '',
};

const setTotal = (expenses) => {
  const total = expenses.reduce((acc, curr) => (
    acc + parseFloat(curr.value) * parseFloat(curr.exchangeRates[curr.currency].ask)
  ), 0);

  return total;
};

const wallet = (state = INITIAL_STATE, { payload, type, id }) => {
  switch (type) {
  case LOADING_ACTION:
    return { ...state, isLoading: true };

  case LOADING_ACTION_SUCCESS:
    return { ...state, currencies: Object.keys(payload) };

  case LOADING_ACTION_FAIL:
    return { ...state, error: payload.error, loading: false };

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      total: setTotal([...state.expenses, payload]).toFixed(2),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.id) {
          return { ...expense, ...payload,
          };
        }
        return expense;
      }),
      total: setTotal(state.expenses).toFixed(2),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== id),
      total: setTotal(state.expenses.filter((expense) => expense.id !== id)).toFixed(2),
    };

  case IS_EDITING: {
    return { ...state, isEditing: true };
  }

  default:
    return state;
  }
};

export default wallet;
