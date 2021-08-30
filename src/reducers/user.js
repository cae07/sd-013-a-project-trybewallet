import { LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  isAuth: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.email, isAuth: true };
  default:
    return state;
  }
};

export default user;
