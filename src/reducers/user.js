// Esse reducer será responsável por tratar as informações da pessoa usuária
// importar as actions
import { LOGIN_SUBMIT } from '../actions';

// declarar o estado inicial
const initialState = {
  email: '',
  password: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return { ...state, email: action.payload.email, password: action.payload.password };
  default:
    return state;
  }
}

export default user;
