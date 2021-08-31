export const LOGIN_NAME = 'LOGIN_NAME';
export const WALLET = 'WALLET';

export const loginName = (payload) => ({
  type: LOGIN_NAME,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});
