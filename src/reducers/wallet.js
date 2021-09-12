import {
  LOADING,
  SAVE_SPENDINGS,
  FAILED,
} from '../actions';

const INITIAL_STATE = {
  expenses: [{
    exchangeRates: {},
  }],
  loading: false,
  erro: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case SAVE_SPENDINGS:
    return {
      ...state,
      loading: false,
      expenses: [{
        id: action.payload.id,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.paycheck,
        tag: action.payload.tag,
        exchangeRates: action.payload.payload,
      }],
    };
  case FAILED:
    return {
      ...state,
      loading: false,
      error: 'try again',
    };
  default:
    return state;
  }
};

export default wallet;
