import {
  SAVE_COINS,
  GET_COINS,
  GET_COINS_FAIL,
  USER_LOGIN,
  USER_WALLET,

} from './actionTypes';
import getCoins from '../services/coinsAPI';

export const actionUserLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const actionUserWallet = () => ({
  type: USER_WALLET,
});

export const actionGetCoins = () => ({
  type: GET_COINS,
});

export const actionSaveCoins = (payload) => ({
  type: SAVE_COINS,
  payload,
});

export const actionGetCoinsFailed = () => ({
  type: GET_COINS_FAIL,
});

//  iniciando o thunk

export const fetchCoinsWhitThunk = () => (dispatch) => {
  dispatch(actionGetCoins());
  return getCoins()
    .then(
      (payload) => dispatch(actionSaveCoins(payload)),
      () => dispatch(actionGetCoinsFailed()),
    );
};
