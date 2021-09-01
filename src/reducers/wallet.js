import {
  SUBMIT_WALLET_EXPENSES,
  SUBMIT_WALLET_CURRENCIES,
  REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_WALLET_EXPENSES:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, { ...action.expense,
        exchangeRates: action.response }],
    };
  case SUBMIT_WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};

export default wallet;
