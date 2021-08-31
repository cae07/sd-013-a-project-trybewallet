// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import LOGIN_SUCESS from '../actions';

const INITIAL_STATE = {
  wallet: {},
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCESS:
    return {
      ...state,
      email: '',
    };
  default:
    return state;
  }
}
