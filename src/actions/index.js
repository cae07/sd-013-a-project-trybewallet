// Coloque aqui suas actions
import ADD_USER from './actionTypes';

const userAdd = (payload) => ({
  type: ADD_USER,
  payload,
});

export default userAdd;
