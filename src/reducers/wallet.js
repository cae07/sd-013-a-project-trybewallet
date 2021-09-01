import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_REQUEST,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_MODE,
  EDIT_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
  expenseId: 0,
  totalExpenses: 0,
  isEditing: false,
  editedId: 0,
};

function calculateTotalExpenses(expenses) {
  let total = 0;
  if (expenses.length > 0 && expenses) {
    expenses.forEach((expense) => {
      const { currency, value, exchangeRates } = expense;
      total += Number(value) * Number(exchangeRates[currency].ask);
    });
  }
  return total;
}

function changeExpense(expenses, id, expense) {
  let index;
  expenses.forEach((item, i) => {
    if (item.id === id) {
      index = i;
    }
  });
  return expenses
    .slice(0, index)
    .concat(expense)
    .concat(expenses.slice(index + 1));
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES:
    return { ...state, currencies: Object.keys(action.payload), isLoading: false };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isLoading: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenseId: state.expenseId + 1,
      expenses: state.expenses.concat({
        ...action.payload,
        id: state.expenseId,
      }),
      totalExpenses: calculateTotalExpenses(state.expenses.concat({
        ...action.payload,
        id: state.expenseId,
      })),
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      totalExpenses: calculateTotalExpenses(
        state.expenses.filter((expense) => expense.id !== action.payload),
      ),
    };
  case EDIT_MODE:
    return { ...state, isEditing: true, editedId: action.payload };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: changeExpense(
        state.expenses, action.id, action.expense,
      ),
    };
  default:
    return state;
  }
};

export default wallet;
