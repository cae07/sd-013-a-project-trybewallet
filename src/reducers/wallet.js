// Esse reducer será responsável por tratar as informações da pessoa usuária
import { WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return { ...state, currencies: action.payload, expenses: action.payload };
  default: return state;
  }
}

export default walletReducer;
