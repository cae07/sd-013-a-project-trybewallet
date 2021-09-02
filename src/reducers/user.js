import { REGISTER_USER } from '../actions';

const initialState = { email: '' };

function user(state = initialState, action) {
  switch (action.type) {
  case REGISTER_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
