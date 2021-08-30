import { SUCCESS_REQUEST, FAIL_REQUEST } from '../actions';

const initial = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initial, action) => {
  switch (action.type) {
  case SUCCESS_REQUEST:
    return { ...state, currencies: action.payload };
  case FAIL_REQUEST:
    return state;
  default:
    return state;
  }
};

export default walletReducer;
