// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});
