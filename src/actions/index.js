// Coloque aqui suas actions
const INPUT_EMAIL = 'INPUT_EMAIL';
export const LOADING_TYPE = 'LOADING_TYPE';

export const inputEmail = (email) => ({
  type: INPUT_EMAIL,
  email,
});

export const loadingAction = () => ({
  type: LOADING_TYPE,
});
