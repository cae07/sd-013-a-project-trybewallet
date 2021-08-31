// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions';

const INITIAL = {
  email: '',
};

const user = (state = INITIAL, action) => {
  switch (action.type) {
  case EMAIL:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default user;
