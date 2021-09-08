// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACTION } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case USER_ACTION:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
