// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SIGN_IN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SIGN_IN:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default user;
