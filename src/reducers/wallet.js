import { LOADING_TYPE, SUCCESS_TYPE, ERROR_TYPE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_TYPE:
    return { ...state, isLoading: true };
  case SUCCESS_TYPE:
    return { ...state, currencies: action.payload, isLoading: false };
  case ERROR_TYPE:
    return { ...state, isLoading: false, error: 'Erro' };
  default: return state;
  }
};

export default wallet;
