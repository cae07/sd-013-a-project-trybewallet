// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password };
  default: return state;
  }
}

export default userReducer;
