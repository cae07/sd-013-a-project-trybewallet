// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(payload),
    };
  default:
    return state;
  }
};

export default wallet;
