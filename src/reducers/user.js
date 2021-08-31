// Esse reducer será responsável por tratar as informações da pessoa usuária
import USER_CHECK from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CHECK:
    return {
      ...state,
      email: action.email,
      password: action.password,
    };
  default:
    return state;
  }
};

export default user;
