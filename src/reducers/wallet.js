import { ADD_EXPENSE, ADD_TOTAL, UPDATE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  total: 0,
  currencies: [],
  expenses: [],
};

const updateTotal = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CURRENCIES:
    return { ...state, currencies: [...action.payload] };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  case ADD_TOTAL:
    return { ...state, total: updateTotal(state) };
  default:
    return state;
  }
};

export default wallet;
