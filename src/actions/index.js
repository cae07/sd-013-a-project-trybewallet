// Coloque aqui suas actions
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_SENHA = 'INPUT_SENHA';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_SENHA,
  payload });
