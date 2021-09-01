// Esse reducer será responsável por tratar as informações da pessoa usuária
import { INFO_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_USER:
    return { ...state, login: action.payload };

  default:
    return state;
  }
};

export default reducer;
