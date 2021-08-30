// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXCHANGE_RATE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXCHANGE_RATE:
    return state;

  default:
    return state;
  }
};

export default wallet;
