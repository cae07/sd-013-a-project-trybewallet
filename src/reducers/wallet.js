import { WALLET_SUCCESS, WALLET_ERROR, EXCHANGE_SUCCESS } from '../actions';

const WALLET_INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INICIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_SUCCESS:
    return {
      ...state,
      currencies: action.wallet.currencies,
    };
  case WALLET_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case EXCHANGE_SUCCESS:
    return {
      ...state,
      expenses: [{
        id: action.expenses.id,
        value: action.expenses.value,
        description: action.expenses.description,
        currency: action.expenses.currency,
        method: action.expenses.paymentMethod,
        tag: action.expenses.kindExpense,
        exchangeRates: action.expenses.exchangeRates,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
