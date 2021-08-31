import { LOGIN_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_EMAIL: return { ...state, email: action.payload };
  default:
    return state;
  }
}

// Esse reducer será responsável por tratar as informações da pessoa usuária
