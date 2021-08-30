// Coloque aqui suas actions
import { USER_ACTION, WALLET_ACTION } from './actionTypes';

export const userAction = (state) => ({
  type: USER_ACTION,
  state,
});

export const walletAction = (state) => ({
  type: WALLET_ACTION,
  state,
});
