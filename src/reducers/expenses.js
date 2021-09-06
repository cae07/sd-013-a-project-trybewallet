import { SAVE_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function expenses(state = initialState, action) {
  switch (action.type) {
  case SAVE_EXPENSES:
    return { ...state, currencies: action.payload.expenses };

  default:
    return state;
  }
}

export default expenses;
