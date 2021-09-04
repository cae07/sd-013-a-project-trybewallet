// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SET_EXPENSES,
  GET_CURRENCIES,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return { ...state, isFetching: true };

    case GET_CURRENCIES:
      return {
        ...state,
        // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
        currencies: [
          ...new Set(Object.values(action.payload).map((currency) => currency.code)),
        ],
        isFetching: false,
      };

    case FAILED_REQUEST:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    case SET_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
}

export default wallet;
