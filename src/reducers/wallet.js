import { IS_FETCHING, CURRENCIES_UPDATED, ERROR } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return { ...state, isFetching: !state.isFetching };

  case CURRENCIES_UPDATED:
    return { ...state, currencies: [action.payload] };

  case ERROR:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
