// Esse reducer será responsável por tratar as informações da pessoa usuária
import { INPUT_EMAIL, INPUT_SENHA } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INPUT_EMAIL:
    return { ...state, email: action.payload };
  case INPUT_SENHA:
    return { ...state, password: action.payload };
  default:
    return state;
  }
}

export default reducerUser;
