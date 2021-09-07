// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;
