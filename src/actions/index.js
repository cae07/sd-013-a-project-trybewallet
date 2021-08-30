import { USER, WALLET } from './actionTypes';

export const userAction = (email) => ({
  type: USER,
  payload: email,
});

export const walletAction = () => ({
  type: WALLET,
});
