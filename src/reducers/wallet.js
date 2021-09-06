import { CURRENCIES_FETCHED, EXPENSE_ADDED } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES_FETCHED: {
    return {
      currencies: [...state.currencies, ...action.payload],
      expenses: [...state.expenses],
    };
  }
  case EXPENSE_ADDED: {
    const nextId = state.expenses.length;
    const newExpense = Object.assign(action.payload, { id: nextId });

    return {
      currencies: [...state.currencies],
      expenses: [...state.expenses, newExpense],
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
