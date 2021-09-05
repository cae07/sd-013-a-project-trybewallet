import { LOADING_TYPE, SUCCESS_TYPE, ERROR_TYPE, EXPENSE_ADD } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_TYPE:
    return { ...state };
  case SUCCESS_TYPE:
    return { ...state, currencies: action.payload,
    };
  case ERROR_TYPE:
    return { ...state, error: action.payload };
  case EXPENSE_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ] };
  default: return state;
  }
};

export default reducerWallet;
