import { GET_COIN_SUCCESS, GET_COIN_FAIL, GET_COIN, SEND_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COIN:
    return { ...state, isLoading: true };
  case GET_COIN_SUCCESS:
    return { ...state, currencies: [...action.payload], isLoading: false };
  case GET_COIN_FAIL:
    return { ...state, error: action.error, isLoading: false };
  case SEND_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default userReducer;
