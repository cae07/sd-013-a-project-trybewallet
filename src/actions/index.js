// Coloque aqui suas actions
export const ENVIAR_EMAIL = 'ENVIAR_EMAIL';

export const userAction = (payload) => ({
  type: ENVIAR_EMAIL,
  user: payload,
});
