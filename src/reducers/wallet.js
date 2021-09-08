// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_CURRENCES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_CURRENCES:
    return {
      ...state,
      currencies: [...action.payload],
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
