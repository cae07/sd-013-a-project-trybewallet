export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const WALLET_DATA = 'WALLET_DATA';

export const loginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const walletData = (payload) => ({
  type: WALLET_DATA,
  payload,
});
// Coloque aqui suas actions
