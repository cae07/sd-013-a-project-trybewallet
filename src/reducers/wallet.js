// Actions
import {
  SET_CURRENCIES,
  REQUEST_EXCHANGE_RATES,
  SET_EXCHANGE_RATES,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
} from '../actions';

// Estado inicial
const INITIAL_STATE = {
  currencies: [], // Moedas
  loadingExchangeRates: false, // Buscando taxas de câmbio
  exchangeRates: {}, // Taxas de câmbio
  expenses: [], // Gastos
};

// Esse reducer será responsável por tratar todas as informações relacionadas as despesas
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES: {
    return {
      ...state,
      currencies: action.currencies,
    };
  }
  case REQUEST_EXCHANGE_RATES: {
    return {
      ...state,
      loadingExchangeRates: true,
    };
  }
  case SET_EXCHANGE_RATES: {
    return {
      ...state,
      loadingExchangeRates: false,
      exchangeRates: action.exchangeRates, // Objeto retornado pela API
    };
  }
  case SAVE_EXPENSE: {
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.value,
          description: action.description,
          currency: action.currency,
          method: action.method,
          tag: action.tag,
          exchangeRates: action.exchangeRates,
        },
      ],
    };
  }
  case DELETE_EXPENSE: {
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  }
  default: {
    return state;
  }
  }
};

export default wallet;
