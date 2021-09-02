import {
  GET_CURRENCIES,
  ADD_PAYMENT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case ADD_PAYMENT:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.paymentInfo,
          exchangeRates: action.result,
          paymentId: state.expenses.length,
        },
      ],
    };
  default:
    return state;
  }
}
