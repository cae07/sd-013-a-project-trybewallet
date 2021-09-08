// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_CURRENCES } from '../actions';

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
  default:
    return state;
  }
}

export default wallet;
