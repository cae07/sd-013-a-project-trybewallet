import {
  SAVE_COINS,
  GET_COINS,
  GET_COINS_FAIL,
  USER_LOGIN,
  USER_WALLET,
  UPDATED_COINS,
  UPDATE_STATE,
  EXCHANGE_RATES,
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

export const actionExchangeRates = (payload) => ({
  type: EXCHANGE_RATES,
  payload,
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

// export const fetchUpdateWithThunk = () => (dispatch) => {
//   dispatch(actionGetCoins());
//   return getCoins()
//     .then(
//       (payload) => dispatch(actionUpdateCoins(payload)),
//       () => dispatch(actionGetCoinsFailed()),
//     );
// };

export const updatedCoinsToStore = () => (dispatch) => {
  dispatch(actionGetCoins());
  return getCoins()
    .then(
      (payload) => dispatch(actionExchangeRates(payload)),
      () => dispatch(actionGetCoinsFailed()),
    );
};
