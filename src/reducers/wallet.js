import {
  GET_CURRENTEXCHANGE_SUCCESS,
  GET_CURRENTEXCHANGE_FAIL,
  DELETE_ITEMS,
  UPDATE_ITEMS_MODE,
  UPDATE_ITEMS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  update: false,
  id: '',
};

const wallet = (
  state = INITIAL_STATE,
  { payload, type, error, value, description, currency = 'USD', method, tag, id },
) => {
  switch (type) {
  case GET_CURRENTEXCHANGE_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses,
        { id, value, description, currency, method, tag, exchangeRates: payload }],
    };
  case GET_CURRENTEXCHANGE_FAIL:
    return {
      ...state,
      error,
    };
  case DELETE_ITEMS:
    return {
      ...state,
      expenses: payload,
    };
  case UPDATE_ITEMS_MODE:
    return {
      ...state,
      update: true,
      id,
    };
  case UPDATE_ITEMS:
    return {
      ...state,
      expenses: payload,
      update: false,
    };
  default:
    return state;
  }
};

export default wallet;
