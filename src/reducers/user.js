// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions';

const INITIAL = {
  email: '',
};

const user = (state = INITIAL, action) => {
  // const { email } = state;
  switch (action.type) {
  case EMAIL:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
