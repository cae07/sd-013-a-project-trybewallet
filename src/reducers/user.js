import { LOGIN } from '../actions';

const USER_INITIAL_STATE = {
  email: '',
};

export const BLA_BLA = 'BLABLA';

export const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload };
  default:
    return state;
  }
};
