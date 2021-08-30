import { UPDATE_CURRENCIES, ERROR, ADD_EXPENSE,
  UPDATE_TOTAL, DELETE_EXPENSE, EDIT_MODE, EDIT_EXPENSE } from '../actions';

const initialState = {
  editMode: { status: false, id: 9999 },
  error: '',
  currencies: [],
  expenses: [],
  total: 0,
};

const updateTotal = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

const editExpense = ({ expenses }, payload) => {
  const index = expenses.findIndex((exp) => exp.id === payload.id);
  expenses[index] = payload;
  return expenses;
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case UPDATE_CURRENCIES:
    return { ...state, currencies: [...payload], error: '' };

  case ERROR:
    return { ...state, error: payload };

  case UPDATE_TOTAL:
    return { ...state, total: updateTotal(state) };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload }],
      error: '',
    };

  case DELETE_EXPENSE:
    return { ...state, expenses: payload };

  case EDIT_MODE:
    return { ...state, editMode: { ...payload } };

  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: editExpense(state, payload),
      editMode: { status: false, id: 9999 },
    };

  default:
    return state;
  }
}

export default wallet;
