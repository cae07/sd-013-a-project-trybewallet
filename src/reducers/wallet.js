import { COINS_LOADING, COINS_SUCCESS } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
