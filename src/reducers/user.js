import { USER_ACTION } from '../actions/actionTypes';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_ACTION:
    return { ...state,
      email: action.email,
    };

  default:
    return state;
  }
};

export default userReducer;
