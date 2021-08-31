// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const WALLER_COIN = 'WALLER_COIN';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});
