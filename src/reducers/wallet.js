import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  FAILED_REQUEST,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
  expenseId: 0,
  totalExpenses: 0,
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

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
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
  default:
    return state;
  }
};

export default wallet;
