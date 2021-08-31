// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING_TYPE, CURRENCY_TYPE, ERROR_TYPE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  loading: false,
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case LOADING_TYPE:
    return { ...state, loading: true };
  case CURRENCY_TYPE:
    return { ...state, currencies: payload, loading: false };
  case ERROR_TYPE:
    return { ...state, error: payload, loading: false };
  default:
    return state;
  }
}

export default wallet;
