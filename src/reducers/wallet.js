import { IS_FETCHING, UPDATE_CURRENCIES, ERROR, UPDATE_EXPENSES } from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  currencies: [],
  expenses: [],
  total: 0,
};

const calcTotal = (state, payload) => {
  const { value, currency } = payload;
  const { currencies, total } = state;
  return total + (parseFloat(value) * parseFloat(currencies[0][currency].ask));
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case IS_FETCHING:
    return { ...state, isFetching: true };

  case UPDATE_CURRENCIES:
    return { ...state, currencies: [payload], isFetching: false };

  case ERROR:
    return { ...state, error: payload, isFetching: false };

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload, exchangeRates: state.currencies[0] }],
      total: calcTotal(state, payload),
    };

  default:
    return state;
  }
}

export default wallet;
