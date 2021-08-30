import { IS_FETCHING, UPDATE_CURRENCIES, ERROR, ADD_EXPENSE,
  UPDATE_TOTAL } from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  currencies: [],
  expenses: [],
  total: 0,
};

const updateTotal = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case IS_FETCHING:
    return { ...state, isFetching: true };

  case UPDATE_CURRENCIES:
    return { ...state, currencies: [payload], isFetching: false };

  case ERROR:
    return { ...state, error: payload, isFetching: false };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload, exchangeRates: state.currencies[0] }],
    };

  case UPDATE_TOTAL:
    return { ...state, total: updateTotal(state) };

  default:
    return state;
  }
}

export default wallet;
