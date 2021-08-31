// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FINISH_FETCH, SAVE_EXPENSES, WAITING_API } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case WAITING_API:
    return state;
  case FINISH_FETCH:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenseObj],
    };
  default:
    return state;
  }
};

export default walletReducer;
