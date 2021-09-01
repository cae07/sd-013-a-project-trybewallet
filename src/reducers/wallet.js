// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FINISH_FETCH, START_FETCH } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  currencyList: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, currencyList } = action;
  switch (type) {
  case START_FETCH:
    return {
      ...state,
      loading: true,
    };

  case FINISH_FETCH:
    return {
      ...state,
      loading: false,
      currencyList,
    };

  default:
    return state;
  }
};

export default wallet;
