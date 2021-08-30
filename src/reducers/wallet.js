// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
} from '../constants';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_ACTION:
    return {
      ...state,
      loading: true,
    };

  case LOADING_ACTION_SUCCESS:
    return {
      ...state,
      loading: false,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };

  case LOADING_ACTION_FAIL:
    return {
      ...state,
      loading: false,
    };

  default:
    return state;
  }
};

export default walletReducer;
