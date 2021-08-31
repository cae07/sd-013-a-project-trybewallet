import { SAVE_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      email: action.state.email,
    };
  default:
    return state;
  }
};

export default user;
