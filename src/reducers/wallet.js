import { WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  gastos: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_DATA: return { ...state, gastos: action.payload };
  default:
    return state;
  }
}

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
