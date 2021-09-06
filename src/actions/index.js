// Coloque aqui suas actions
export const input_email = 'INPUT_EMAIL';
export const input_senha= 'INPUT_SENHA';

export const inputEmail = (payload) => ({
  type: input_email,
  payload });

export const inputPassword = (payload) => ({
  type: input_senha,
  payload });
