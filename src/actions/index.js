import { USER_INFO, USER_WALLET } from './actionTypes';

export const actionUserInfo = (email) => ({
  type: USER_INFO,
  email,
});

export const actionUserWallet = () => ({
  type: USER_WALLET,
});
