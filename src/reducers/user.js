import { LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  //action.type === LOGIN
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
