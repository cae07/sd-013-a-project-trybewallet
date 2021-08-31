import { LOGIN } from '../actions';

const USER_INITIAL_STATE = {
  user: {
    email: '',
  },
};

export const BLA_BLA = 'BLABLA';

export const userLogin = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return ({
      ...state,
      email: action.payload.email });
  default:
    return state;
  }
};
