import {
  SAVE_STATE_EXPENSES,
  DELETE_EXPENSE,
  FETCH_API_THUNK_EXCHANGE_RATES,
  FETCH_API_THUNK_HAS_STARTED,
  FETCH_API_THUNK_HAS_FINISHED,
  FETCH_API_THUNK_HAS_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
  expenseDeletedID: -1,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_STATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, ...[action.payload.expenses]],
    };
  case DELETE_EXPENSE:
    return { ...state, ...action.payload };
  case FETCH_API_THUNK_EXCHANGE_RATES:
    return {
      ...state,
      currencies: [...state.currencies, ...[action.payload.exchangeRates]],
    };
  case FETCH_API_THUNK_HAS_STARTED:
    return {
      ...state, loading: true,
    };
  case FETCH_API_THUNK_HAS_FINISHED:
    return {
      ...state, loading: false,
    };
  case FETCH_API_THUNK_HAS_ERROR:
    return {
      ...state, error: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
