import { WALLET_ACTION, SUCCESS_TYPE, ERROR_TYPE, SEND_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  erro: '',
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
      erro: action.erro.message,
    };
  case SEND_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
