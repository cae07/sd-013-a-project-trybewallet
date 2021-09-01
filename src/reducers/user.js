import { SAVE_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
