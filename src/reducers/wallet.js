// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  LOADING_CURRENCY,
  SUCESS_CURRENCY,
  FAIL_CURRENCY,
  SEND_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isloading: false,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING_CURRENCY:
    return { ...state, isloading: true };
  case SUCESS_CURRENCY:
    return { ...state, currencies: action.payload };
  case FAIL_CURRENCY:
    return { ...state, error: action.payload.message };
  case SEND_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, { ...action.payload, exchangeRates: action.data }] };
  default: return state;
  }
}

export default walletReducer;
