import { SUCCESFUL_RESPONSE, FAILED_RESPONSE, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    loading: null,
    error: null,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state, loading: true,
    };
  case SUCCESFUL_RESPONSE:
    return {
      ...state, loading: false, currencies: action.payload,
    };
  case FAILED_RESPONSE:
    return {
      ...state, loading: false, error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
