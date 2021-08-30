import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_REQUEST,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
