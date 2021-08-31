export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});
