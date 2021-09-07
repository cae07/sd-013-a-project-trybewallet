// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_ACTION } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};
const wallet = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
