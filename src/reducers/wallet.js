import { COINS_LOADING, COINS_SUCCESS, COINS_FAIL, SPENT_SUCCESS, DELETE_ITEM } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case COINS_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case COINS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.coins,
    };
  case COINS_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  case SPENT_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.spent, id: state.expenses.length }],
      isLoading: false,
    };
  case DELETE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.itemId),
    };
  default:
    return state;
  }
};

export default wallet;
