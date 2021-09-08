import { SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default reducer;
