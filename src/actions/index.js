// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const LOADING_COIN = 'LOADING_COIN';
export const SUCCESS_COIN = 'SUCCESS_COIN';
export const ERROR_COIN = 'ERROR_COIN';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});

// const loadingCurrency = () => ({
//   type: LOADING_COIN,
// });

// const successCurrency = (data) => ({
//   type: SUCCESS_COIN,
//   data,
// });

// const errorCurrency = (error) => ({
//   type: ERROR_COIN,
//   error,
// });

// export function fetchCoin() {

// }
