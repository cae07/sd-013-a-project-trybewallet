import { IS_FETCHING, CURRENCIES_UPDATED, ADD_EXPENSE, UPDATE_TOTAL } from '../actions';
import expensesSum from '../helpers/ExpensesSum';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
  total: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return { ...state, isFetching: !state.isFetching };

  case CURRENCIES_UPDATED:
    return { ...state, currencies: [action.payload] };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload,
        }],
    };

  case UPDATE_TOTAL:
    return { ...state, total: expensesSum(state) };
  default:
    return state;
  }
};

export default walletReducer;
