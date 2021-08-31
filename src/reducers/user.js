import { EMAIL_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_LOGIN:
    return {
      ...state, email: action.payload,
    };
  default: return state;
  }
};

export default reducerUser;
