import {
  GET_CURRENCIES,
  ADD_PAYMENT,
  DELETE_PAYMENT,
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
          id: state.expenses.length,
          exchangeRates: action.result,
        },
      ],
    };
  case DELETE_PAYMENT:
    return {
      ...state,
      expenses: state.expenses
        .filter((payment) => payment.paymentId !== action.paymentId),
    };
  default:
    return state;
  }
}
