import { UPDATE_CURRENCIES, UPDATE_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
};

const calc = (state, payload) => {
  const { value, currency } = payload;
  const { currencies, total } = state;
  return total + (parseFloat(value) * (parseFloat(currencies[currency].ask)));
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case UPDATE_CURRENCIES:
    return { ...state, currencies: action.payload };

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.payload,
          exchangeRates: state.currencies,
        }],
      total: calc(state, action.payload),
    };

  default:
    return state;
  }
}

export default wallet;
