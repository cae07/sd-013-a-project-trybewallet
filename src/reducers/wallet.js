import { GET_CURRENCY, LOADING_FETCH, GET_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, { type, json, payload, id }) => {
  switch (type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: json,
      loading: false,
    };
  case LOADING_FETCH:
    return {
      ...state,
      loading: true,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id,
        ...payload,
        exchangeRates: json,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
