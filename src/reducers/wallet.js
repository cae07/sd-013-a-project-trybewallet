// Esse reducer será responsável por tratar o todas as informações// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  SUCCESS_FETCH,
  SUCCESS_FETCH_EXPENSES,
  REMOVE_LIST_TABLE,
} from '../actions/walletActions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, { type, payload, stat }) {
  switch (type) {
  case SUCCESS_FETCH:
    return {
      ...state, currencies: { ...payload },
    };
  case SUCCESS_FETCH_EXPENSES:
    return {
      ...state,
      expenses:
      [...state.expenses,
        { ...stat, exchangeRates: { ...payload } }],
    };
  case REMOVE_LIST_TABLE:
    return {
      ...state, expenses: [...state.expenses.filter((expense) => expense.id !== payload)],
    };
  default:
    return state;
  }
}

export default wallet;
