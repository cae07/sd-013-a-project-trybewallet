import { ADD_EXPENSE,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCESS,
  GET_EXCHANGE_RATES_FAILED,
  GET_EXCHANGE_RATES_SUCESS,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCESS:
    return ({
      ...state,
      currencies: action.payload,
    });
  case GET_CURRENCIES_FAILED:
    return ({
      ...state,
      currencies: [0],
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    });
  case GET_EXCHANGE_RATES_SUCESS:
    return ({
      ...state,
      exchangeRates: action.payload,
    });
  case GET_EXCHANGE_RATES_FAILED:
    return ({
      ...state,
      exchangeRates: { failed: true },
    });
  default:
    return state;
  }
}

export default wallet;
