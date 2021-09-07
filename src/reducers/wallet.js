// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { INSERT_EXPENSES } from '../actions';

const INITIAL_STATE = { expenses: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default reducer;
