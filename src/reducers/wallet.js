import { EXPENSES,
  TOTAL, SUCCESFUL_RESPONSE, FAILED_RESPONSE, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  loading: true,
  error: null,
  total: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case SUCCESFUL_RESPONSE:
    return {
      ...state,
      loading: false,
      currencies: action.payload,
    };
  case FAILED_RESPONSE:
    return {
      ...state, loading: false, error: action.payload,
    };
  case EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  case TOTAL:
    return {
      ...state, total: [...state.total, action.amount],
    };
  default:
    return state;
  }
};

export default wallet;
