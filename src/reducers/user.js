// Esse reducer será responsável por tratar as informações da pessoa usuária
// import
import LOGIN_SUCESS from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCESS:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
