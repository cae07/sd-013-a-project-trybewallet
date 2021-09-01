import { USER_INFO } from '../actions';

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
