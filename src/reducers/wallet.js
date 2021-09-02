import { WALLET, REQUEST_FETCH, RECEIVE_FETCH, FAIL_FETCH } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, user: action.payload };
  case REQUEST_FETCH:
    return { ...state, status: action.status };
  case RECEIVE_FETCH:
    return { ...state, currencies: [{ ...action.payload }] };
  case FAIL_FETCH:
    return { ...state, status: action.status };
  default:
    return state;
  }
};

export default walletReducer;
