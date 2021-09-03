// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// importar as actions
import { START_FETCH, GET_INFO } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_FETCH:
    return {
      ...state,
      loading: true };
  case GET_INFO:
    return {
      ...state,
      currencies: Object.keys(action.payload),
      loading: false };
  default:
    return state;
  }
};

export default walletReducer;
