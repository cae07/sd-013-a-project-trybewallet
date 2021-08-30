import { LOGIN } from './actionTypes';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const save = (payload) => ({
  type: LOGIN,
  payload,
});
