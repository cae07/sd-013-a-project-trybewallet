// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_ACTION, SUCCESS_TYPE, ERROR_TYPE } from '../actions';

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
  case SUCCESS_TYPE:
    return {
      ...state,
      currencies: action.payload,
    };
  case ERROR_TYPE:
    return {
      ...state,
      error: 'Falhou seu bobinho',
    };
  default:
    return state;
  }
};

export default wallet;
