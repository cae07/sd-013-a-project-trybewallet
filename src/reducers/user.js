// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REGISTER_USER } from '../constants';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REGISTER_USER:
    return { ...state, email: action.payload };

  default:
    return state;
  }
};

export default user;
