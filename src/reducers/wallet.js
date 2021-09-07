// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletInformation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses,
        exchangeRates: action.response }],
    };
  default:
    return state;
  }
};

export default walletInformation;
