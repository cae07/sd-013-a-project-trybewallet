import { SUBMIT_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_LOGIN:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };

  default:
    return state;
  }
};

export default user;
