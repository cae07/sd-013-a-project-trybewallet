import { COINS_LOADING, COINS_SUCCESS, SPENT_SUCCESS } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case COINS_LOADING:
    return {
      ...state,
      coinsLoading: true,
    };
  case COINS_SUCCESS:
    return {
      ...state,
      coinsLoading: false,
      currencies: action.coins,
    };
  case SPENT_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.spent, id: state.expenses.length }],
    };
  default:
    return state;
  }
};

export default wallet;
