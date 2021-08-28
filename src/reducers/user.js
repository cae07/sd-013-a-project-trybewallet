import { SAVE_LOGIN } from '../actions';

const INITIAL_STATE = {
  login: '',
};

const reducerLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      login: action.payload,
    };
  default:
    return state;
  }
};

export default reducerLogin;
