export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const salvarStore = (payload) => ({
  type: USER_ACTION,
  payload,
});
export const sendWalletInfo = (payload) => ({
  type: WALLET_ACTION,
  payload,
});
