// Coloque aqui suas actions

export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  email: payload.email,
});
