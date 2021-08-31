// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',

};

const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case LOGIN:
    return { ...state, email: actions.user };

  default:
    return state;
  }
};

export default reducer;
