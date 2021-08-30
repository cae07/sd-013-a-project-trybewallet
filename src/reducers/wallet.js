// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXCHANGE_RATE, IS_FETCHING } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXCHANGE_RATE:
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };

  case IS_FETCHING:
    return {
      ...state,
      isFetching: true,
    };

  default:
    return state;
  }
};

export default wallet;
