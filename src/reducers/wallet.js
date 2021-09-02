import { GET_CURRENCY, LOADING_FETCH,
  GET_EXPENSES, TOTAL_SUM } from '../actions/actionTypes';

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
  case TOTAL_SUM:
    return {
      ...state,
      total: payload,
    };
  default:
    return state;
  }
};

export default wallet;
