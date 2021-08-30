// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
