import { USER_INFO } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO:
    return { ...state,
      email: action.payload.email,
      password: action.payload.password };
  default:
    return state;
  }
}
