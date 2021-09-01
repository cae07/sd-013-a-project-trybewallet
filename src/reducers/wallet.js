import { GET_COINS, GET_COINS_FAIL, SAVE_COINS } from '../actions/actionTypes';

const INITIAL_STATE = {
  coinsJson: {},
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
      coinsJson: action.payload,
    });
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
