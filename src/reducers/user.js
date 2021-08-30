import { EMAIL_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_LOGIN:
    return {
      ...state, user: action.payload,
    };
  default: return state;
  }
};

export default reducerUser;
