import { REQUEST_CURRENCIES, SET_EXPENSE, SUCESS_REQUEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, { type, payload, id, response }) => {
  switch (type) {
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id, ...payload, exchangeRates: response }],
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case SUCESS_REQUEST:
    return {
      ...state,
      loading: false,
      currencies: payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
