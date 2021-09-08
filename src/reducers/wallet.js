import { FETCH_ERROR, REQUEST_CURRENCIES, REQUEST_QUOTATION, RECEIVED_CURRENCIES,
  RECEIVED_QUOTATION } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  expenses: [],
  isFetching: false,
  isFetchingCurrencies: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_ERROR:
    return {
      ...state,
      error: action.error,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetchingCurrencies: true,
    };
  case REQUEST_QUOTATION:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVED_CURRENCIES:
    return {
      ...state,
      currencies: [action.currencies],
      isFetchingCurrencies: false,
    };
  case RECEIVED_QUOTATION:
    return {
      ...state,
      expenses: [{
        currency: action.currency,
        description: action.description,
        id: action.id,
        method: action.method,
        tag: action.tag,
        value: action.value,
        exchangeRates: {
          ...action.currencyTypes,
        },
      }],
      isFetching: false,
    };
  default:
    return state;
  }
}

export default wallet;
