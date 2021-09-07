import { INSERT_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [{}],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_CURRENCIES:
    return {
      ...state,
      currencies: [action.payload],
    };

  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
