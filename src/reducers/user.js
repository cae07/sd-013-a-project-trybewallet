// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_SUCCESS } from '../actions';
// import CURRENCY_SUCCESS from '../actions'

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      email: action.payload,
    };
  // case CURRENCY_SUCCESS:
  //   return {
  //     ...state,
  //     wallet: action.payload,
  //   };
  default:
    return state;
  }
}
