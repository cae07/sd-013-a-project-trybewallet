import { SET_WALLET, REQUEST_FETCH, RECEIVE_FETCH, FAILL_FETCH } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET:
    return { ...state, ...action.payload };
  case REQUEST_FETCH:
    return { ...state, status: action.status };
  case RECEIVE_FETCH:
    return { ...state, currencies: [{ ...action.payload }] };
  case FAILL_FETCH:
    return { ...state, status: action.status };
  default:
    return state;
  }
};

export default wallet;
