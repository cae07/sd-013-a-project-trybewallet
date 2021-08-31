// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions';

const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.payload.email };

  default:
    return state;
  }
}

export default user;
