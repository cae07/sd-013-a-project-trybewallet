import { SET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, { type, email }) => {
  switch (type) {
  case SET_USER_EMAIL:
    return {
      email,
    };
  default:
    return state;
  }
};

export default userReducer;
