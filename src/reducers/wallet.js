import {
  GET_CURRENTEXCHANGE_SUCCESS,
  GET_CURRENTEXCHANGE_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (
  state = INITIAL_STATE,
  { payload, type, error, value, description, currency = 'USD', method, tag, id },
) => {
  switch (type) {
  case GET_CURRENTEXCHANGE_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: payload,
      }],
    };
  case GET_CURRENTEXCHANGE_FAIL:
    return {
      ...state,
      error,
    };
  default:
    return state;
  }
};

export default wallet;
