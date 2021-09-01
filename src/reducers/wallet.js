import {
  IS_FETCHING,
  GET_CURRENCIES,
  ADD_EXPENSE,
  UPDATE_TOTAL,
} from '../actions';

import sumExpenses from '../helpers/sumExpenses';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  total: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: [action.payload] };
  case IS_FETCHING:
    return { ...state, isFetching: action.payload };
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
    return { ...state, total: sumExpenses(state) };
  default:
    return state;
  }
};

export default walletReducer;
