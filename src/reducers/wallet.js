// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOADING_CURRENCY, SUCESS_CURRENCY, FAIL_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isloading: false,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING_CURRENCY:
    return { ...state, isloading: true };
  case SUCESS_CURRENCY:
    return { ...state, currencies: action.payload };
  case FAIL_CURRENCY:
    return { ...state, error: action.payload.message };
  default: return state;
  }
}

export default walletReducer;
