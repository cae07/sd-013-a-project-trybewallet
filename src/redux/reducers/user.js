// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER_INFO } from '../actions';
import { INITIAL_STATE } from '.';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_INFO:
    return {
      ...state,
      user: {
        email: action.payload,
      },
    };
  default:
    return state;
  }
};

export default user;
