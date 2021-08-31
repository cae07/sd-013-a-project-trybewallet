// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING_COIN, SUCESS_COIN, FAIL_COIN } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING_COIN:
    return { ...state, isLoading: true };

  case SUCESS_COIN:
    return { ...state,
      isLoading: false,
      currencies: [...action.payload],
    };

  case FAIL_COIN:
    return {
      ...state,
      isLoading: false,
      error: action.error.message,
    };

  default:
    return state;
  }
}

export default walletReducer;
