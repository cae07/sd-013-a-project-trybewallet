import { LOGIN_ACTION } from './actionTypes';

// Coloque aqui suas actions
export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  email,
});

export const LINT = 'LINT';
