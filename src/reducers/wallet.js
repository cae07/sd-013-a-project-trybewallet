// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES, SAVE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.payload.currencies };

  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload.expense] };

  default:
    return state;
  }
}

export default wallet;
