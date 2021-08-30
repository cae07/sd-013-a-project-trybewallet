import { IS_FETCHING, UPDATE_CURRENCIES, ERROR } from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  currencies: [{}],
  expenses: [],
  total: 0,
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case IS_FETCHING:
    return { ...state, isFetching: true };

  case UPDATE_CURRENCIES:
    return { ...state, currencies: [payload], isFetching: false };

  case ERROR:
    return { ...state, error: payload, isFetching: false };

  default:
    return state;
  }
}

export default wallet;
