// Coloque aqui suas actions
export const SET_PERSONAL_INFO = 'SET_PERSONAL_INFO';

export const setPersonalInfo = (email) => ({
  type: SET_PERSONAL_INFO,
  email,
});
