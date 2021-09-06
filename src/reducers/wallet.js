import { SAVE_EXPENSE, SAVE_CURRENCIES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.obj }],
      // arrayValueExpenses: [...state.arrayValueExpenses, action.convertValueExpense],
      totalExpenses: state.totalExpenses
        ? parseFloat(state.totalExpenses)
        + parseFloat(action.convertValueExpense)
        : parseFloat(action.convertValueExpense),
    };
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.jsonCurrencies,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(
        (index) => index.id !== action.id,
      )],
      totalExpenses: state.totalExpenses - action.convertValue,
    };
  default:
    return state;
  }
};

export default wallet;
