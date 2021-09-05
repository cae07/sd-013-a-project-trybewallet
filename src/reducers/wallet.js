import {
  GET_COINS,
  GET_COINS_FAIL,
  SAVE_COINS,
  UPDATE_STATE,
  EXCHANGE_RATES,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  isLoading: true,
  erro: null,
};

const saveCoins = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return ({
      ...state, isLoading: true,
    });
  case SAVE_COINS:
    return ({
      ...state,
      isLoading: false,
      currencies: action.payload,
    });
  case UPDATE_STATE:
    return ({
      ...state,
      expenses: [...state.expenses, action.state],
      isLoading: false,
    });
  case EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: action.payload,
      isLoading: false,
    };
  case GET_COINS_FAIL:
    return ({
      ...state,
      isLoading: false,
      erro: 'Tente Novamente',
    });
  default:
    return state;
  }
};

export default saveCoins;
