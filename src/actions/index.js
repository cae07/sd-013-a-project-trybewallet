// Coloque aqui suas actions
// Action é uma função que retorna um objeto que contenha ao menos uma chave denominada "type"
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const loginSubmit = (email, password) => (
  { type: LOGIN_SUBMIT, payload: { email, password } }
);
