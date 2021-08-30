import { SET_USER, SET_WALLET } from './actionTypes';

export const setUser = (payload) => ({
  type: SET_USER, payload,
});

export const setWallet = (payload) => ({
  type: SET_WALLET, payload,
});
