// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
} from '../constants';

const INITIAL_STATE = {
  currencies: [{}],
  expenses: [],
  total: 0,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_ACTION:
    return {
      ...state,
      loading: true,
    };

  case LOADING_ACTION_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      expenses: action.payload,
    };

  case LOADING_ACTION_FAIL:
    return {
      ...state,
      error: action.payload.error,
      loading: false,
    };

  default:
    return state;
  }
};

export default wallet;
