// Coloque aqui suas actions

import getCoin from '../services';

export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const LOADING_CURRENCY = 'LOADING_CURRENCY';
export const SUCESS_CURRENCY = 'SUCESS_CURRENCY';
export const FAIL_CURRENCY = 'FAIL_CURRENCY';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});

const isLoading = () => ({
  type: LOADING_CURRENCY,
});

const sucessLoading = (payload) => ({
  type: SUCESS_CURRENCY,
  payload,
});

const failLoadind = (payload) => ({
  type: FAIL_CURRENCY,
  payload,
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(isLoading());
  return getCoin()
    .then((result) => {
      const filteredCoins = Object
        .keys(result)
        .filter((coin) => coin !== 'USDT');
      dispatch(sucessLoading(filteredCoins));
    },
    (error) => dispatch(failLoadind(error)));
};
