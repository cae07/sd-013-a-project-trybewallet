// Coloque aqui suas actions
import { USER_ACTION, WALLET_ACTION } from './actionTypes';

export const userAction = (email) => ({
  type: USER_ACTION,
  email,
});

export const walletAction = (state) => ({
  type: WALLET_ACTION,
  state,
});
