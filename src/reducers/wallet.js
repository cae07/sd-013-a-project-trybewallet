import { SAVE_EXPENSE, SAVE_CURRENCIES, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpense: false,
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
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(
        (index) => index.id !== action.id,
      )],
      editExpense: true,
    };
  default:
    return state;
  }
};

export default wallet;
