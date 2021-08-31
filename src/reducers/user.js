import { USER_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return ({
      email: action.payload.email,
      password: action.payload.password,
    });
  default:
    return state;
  }
};

export default user;
