// Coloque aqui suas actions
import { SIGN_IN } from './actionTypes';

export const signIn = (email) => ({
  type: SIGN_IN,
  payload: email,
});

export const generic = () => ({});
