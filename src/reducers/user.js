// Esse reducer será responsável por tratar as informações da pessoa usuária

// importar as actions
import { LOGIN_ACTION } from '../actions/actionTypes';

// declarar o estado inicial
const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
