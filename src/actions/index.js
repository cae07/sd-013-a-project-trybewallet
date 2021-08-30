// Coloque aqui suas actions
const SET_EMAIL = 'SET_EMAIL';

const setEmail = (payload) => (
  {
    type: SET_EMAIL, payload,
  }
);

export default setEmail;
