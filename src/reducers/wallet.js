import {
  SAVE_STATE_EXPENSES,
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
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_STATE_EXPENSES:
    return {
      expenses: [...state.expenses, ...[action.payload.expenses]],
      currencies: [...state.currencies],
      loading: state.loading,
      error: state.error,
    };
  case FETCH_API_THUNK_EXCHANGE_RATES:
    return {
      expenses: [...state.expenses],
      currencies: [...state.currencies, ...[action.payload.exchangeRates]],
      loading: state.loading,
      error: state.error,
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
