import { SUCCESS_REQUEST, FAIL_REQUEST, SAVE_EXPENSE } from '../actions';

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
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
