import {
  SAVE_COINS,
  GET_COINS,
  GET_COINS_FAIL,
  USER_LOGIN,
  USER_WALLET,
  UPDATED_COINS,
  UPDATE_STATE,
  UPDATE_TOTAL,
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

export const actionUpdateCoins = (payload) => ({
  type: UPDATED_COINS,
  payload,
});

export const actionUpdate = (state) => ({
  type: UPDATE_STATE,
  state,
});

export const actionTest = () => ({
  type: UPDATE_TOTAL,
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

export const updatedCoinsToStore = (expenses) => (dispatch) => {
  dispatch(actionGetCoins());
  return getCoins()
    .then(
      (exchangeRates) => dispatch(actionUpdate({ ...expenses, exchangeRates })),
      () => dispatch(actionGetCoinsFailed()),
    );
};
