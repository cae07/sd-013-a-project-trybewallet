// Coloque aqui suas actions

import { LOGIN } from './actionTypes';

const login = (email) => ({
  type: LOGIN,
  email,
});

export default login;
