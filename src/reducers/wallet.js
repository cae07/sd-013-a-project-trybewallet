import {
  GET_COINS,
  GET_COINS_FAIL,
  SAVE_COINS,
  UPDATE_STATE,
  EXCHANGE_RATES,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  expenses: [{
    id: 0,
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: {},
  }],
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
      expenses: {
        id: action.state.id,
        value: action.state.value,
        description: action.state.description,
        currency: action.state.currency,
        method: action.state.method,
        tag: action.state.tag,
      },
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
