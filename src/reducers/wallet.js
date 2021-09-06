// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.payload.currencies };

  default:
    return state;
  }
}

export default wallet;
