// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ACTION_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_EMAIL:
    return ({
      ...state, email: action.email,
    });
  default:
    return state;
  }
};

export default user;
