import { SAVE_EXPENSE, SAVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.jsonCurrencies,
    };
  default:
    return state;
  }
};

export default wallet;
