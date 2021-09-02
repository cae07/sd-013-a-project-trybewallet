import {
  GET_CURRENCIES,
  ADD_PAYMENT,
  DELETE_PAYMENT,
  EDIT_PAYMENT,
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
        .filter((payment) => payment.id !== action.payment.id),
    };
  // Obrigado Camilo e Rogerio 1990CV
  case EDIT_PAYMENT:
    return {
      ...state,
      expenses: [
        ...state.expenses
          .filter((payment) => payment.id !== action.paymentState.id),
        action.paymentState,
      ].sort((a, b) => a.id - b.id),
    };
  default:
    return state;
  }
}
