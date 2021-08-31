// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOG_IN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOG_IN:
    return ({
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    });
  default:
    return state;
  }
}

export default user;
