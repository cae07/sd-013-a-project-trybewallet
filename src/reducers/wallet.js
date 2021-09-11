import { SAVE_EXPENSE, DELETE_EXPENSE } from '../actions';

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
  case DELETE_EXPENSE: {
    console.log(state.expenses);
    const array = state.expenses.filter(
      (expense) => expense.id !== action.payload.idToRemove,
    );
    console.log(array);

    return {
      ...state,
      expenses: [...array],
    }; }
  default:
    return state;
  }
};

export default walletReducer;
