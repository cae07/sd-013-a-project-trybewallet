import { REGISTER_USER } from '../actions';

const initialState = {
  email: '',
};

function user(state = initialState, { type, payload }) {
  switch (type) {
  case REGISTER_USER:
    return { ...state, email: payload };

  default:
    return state;
  }
}

export default user;
