import { SEND_EXPENSES, RECEIVE_CURRENCIES, SEND_TOTAL_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case SEND_TOTAL_EXPENSES:
    return { ...state, totalExpenses: action.totalExpenses };
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.data };
  default:
    return state;
  }
};

export default wallet;
