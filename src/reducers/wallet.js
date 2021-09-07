import { SAVE_EXPENSE, SAVE_CURRENCIES, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpense: false,
  expenseInEdition: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.obj }],
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
      editExpense: false,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: true,
      expenseInEdition: action.expenseInEdition,
    };
  default:
    return state;
  }
};

export default wallet;
