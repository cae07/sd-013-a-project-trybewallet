import { WALLET_DATA } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case WALLET_DATA: return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
