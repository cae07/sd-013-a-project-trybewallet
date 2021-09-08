import { CURRENCIES_FETCHED, EXPENSE_ADDED, EXPENSE_EXCLUDED } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCIES_FETCHED: {
    return {
      currencies: action.payload,
      expenses: [...state.expenses],
    };
  }
  case EXPENSE_ADDED: {
    const nextId = state.expenses.length;
    const newExpense = Object.assign(action.payload, { id: nextId });

    return {
      currencies: { ...state.currencies },
      expenses: [...state.expenses, newExpense],
    };
  }
  case EXPENSE_EXCLUDED: {
    const expenses = [...state.expenses];
    expenses.splice([action.payload], 1); // Remove the expense based on its id

    return {
      currencies: { ...state.currencies },
      expenses: [...expenses],
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
