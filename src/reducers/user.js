import { SET_USER } from '../actions';

const users = {
  email: '',
  password: '',
  loginValid: '',
  passwordValid: '',
};

const user = (state = users, action) => {
  switch (action.type) {
  case SET_USER:
    return { ...state, ...action.state };
  default:
    return state;
  }
};

export default user;
