import { USER_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      user: {
        ...state.user,
        email: action.payload,
      } };

  default:
    return state;
  }
};

export default userReducer;
