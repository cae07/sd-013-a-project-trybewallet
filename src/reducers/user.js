import { USER_INFO } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO:
    return {
      email: action.payload.email,
      password: action.payload.password,
    };

  default:
    return state;
  }
};

export default userReducer;
