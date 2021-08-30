// Coloque aqui suas actions

export const GET_USER_EMAIL = 'GET_USER_EMAIL';

export const getUserEmail = (payload) => ({
  type: GET_USER_EMAIL,
  email: payload,
});
