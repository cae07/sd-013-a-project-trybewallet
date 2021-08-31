import { USER_LOGIN, USER_WALLET } from './actionTypes';

export const actionUserLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const actionUserWallet = () => ({
  type: USER_WALLET,
});
