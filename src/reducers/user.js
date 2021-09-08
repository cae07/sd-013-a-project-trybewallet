import { LOGIN_ACTION } from '../actions/action_types';

const ESTADO_INICIAL_USER = {
  email: '',
};

const user = (state = ESTADO_INICIAL_USER, action) => {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
