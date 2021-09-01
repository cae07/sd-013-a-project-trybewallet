import { COIN_LOAD, COIN_SUCCESS, COIN_FAIL, SPENT_SUCC } from '../actions';

const FIRST_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = FIRST_STATE, action) => {
  switch (action.type) {
  case COIN_LOAD:
    return {
      ...state,
      isLoading: true,
    };
  case COIN_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.coin,
    };
  case COIN_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  case SPENT_SUCC:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.spent, id: state.expenses.length }],
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
