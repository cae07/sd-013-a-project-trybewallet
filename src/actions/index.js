// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';

export const sendUserEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
