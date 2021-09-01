import {
  SUCCESS_TYPE,
  ERROR_TYPE,
  LOADING_TYPE,
  SUBMIT_TYPE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_TYPE:
    return {
      ...state,
      isLoading: true,
    };
  case SUCCESS_TYPE:
    return {
      ...state,
      currencies: action.payload,
    };
  case ERROR_TYPE:
    return {
      ...state,
      error: 'error 404',
    };
  case SUBMIT_TYPE:
    return {
      ...state,
      expenses: [action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
