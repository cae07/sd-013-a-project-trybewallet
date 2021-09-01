import { LOGIN_ACTION } from './actionTypes';
// Coloque aqui suas actions
// Action é uma função que retorna um objeto que contenha ao menos uma chave denominada "type"

// export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  email,
});
