// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isFetching: true,
  currencyToExchange: 'BRL',
  currencies: [],
  error: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCHING:
    return { ...state };

  case FETCHING_SUCCESS:
    return {
      ...state, isFetching: false, currencies: Object.keys(action.json),
    };

  case FETCHING_FAIL:
    return { ...state, error: action.error, isFetching: false };

  default:
    return state;
  }
};

export default wallet;
