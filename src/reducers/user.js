import { LOGIN_NAME } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_NAME: return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
