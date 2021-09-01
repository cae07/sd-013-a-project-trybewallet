import { REGISTER_USER } from '../actions';

function user(state = { email: '' }, { type, payload }) {
  switch (type) {
  case REGISTER_USER:
    return { ...state, email: payload };
  default:
    return state;
  }
}

export default user;
