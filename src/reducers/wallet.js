// Actions
import { ADD_EXPENSE } from '../actions';

// Estado inicial
const INITIAL_STATE = {
  expenses: [],
};

// Esse reducer será responsável por tratar todas as informações relacionadas as despesas
// "walletReducer"
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE: {
    return {
      ...state,
    };
  }
  default: {
    return state;
  }
  }
};

export default wallet;
