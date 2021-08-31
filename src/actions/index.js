// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';

const setUserEmail = (payload) => ({
  type: 'VALID_EMAIL',
  payload,
});

export default setUserEmail;
