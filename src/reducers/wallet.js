import { GET_CURRENCIES_FAILED, GET_CURRENCIES_SUCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCESS:
    return ({
      ...state,
      currencies: action.payload,
    });
  case GET_CURRENCIES_FAILED:
    return ({
      ...state,
      currencies: [0],
    });
  default:
    return state;
  }
}

export default wallet;
