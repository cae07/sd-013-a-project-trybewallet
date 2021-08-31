// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';

export const WALLET_INFO = 'SEND_PASSWORD';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});
