export const USER_LOGIN = 'USER_LOGIN';
export const WALLET_INFO = 'WALLET_INFO';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const walletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});
