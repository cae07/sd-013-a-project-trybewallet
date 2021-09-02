// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { VALOR, EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case VALOR:
    return { ...state, currencies: actions.payload };
  case EXPENSE:
    return { ...state, expenses: actions.payload };
  default:
    return state;
  }
};

export default wallet;
