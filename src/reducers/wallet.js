import { SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  default:
    return state;
  }
};

export default walletReducer;
