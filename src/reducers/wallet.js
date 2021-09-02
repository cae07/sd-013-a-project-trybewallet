import { ADD_EXPENSE, ADD_TOTAL, DELETE_EXPENSE,
  EDIT_MODE, UPDATE_CURRENCIES, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  total: 0,
  currencies: [],
  expenses: [],
  edit: { status: false, id: null },
};

const editExpense = ({ expenses }, payload) => {
  const index = expenses.findIndex((exp) => exp.id === payload.id);
  console.log(index);
  expenses[index] = payload;
  return expenses;
};

const updateTotal = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CURRENCIES:
    return { ...state, currencies: [...action.payload] };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };

  case ADD_TOTAL:
    return { ...state, total: updateTotal(state) };

  case DELETE_EXPENSE: {
    const filterExpense = state.expenses.filter(
      (expense) => expense.id !== action.payload && expense,
    );
    return { ...state, expenses: [...filterExpense] };
  }

  case EDIT_MODE:
    return {
      ...state, edit: { status: action.status, id: action.id },
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: editExpense(state, action.payload),
      edit: { status: !state.edit.status },
    };

  default:
    return state;
  }
};

export default wallet;
