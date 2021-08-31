// Esse reducer será responsável por tratar as informações da pessoa usuária
import USER_ACTION from '../actions';

const ESTADO_INICIAL = {
  email: '',
};

const user = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case USER_ACTION:
    return {
      ...state,
      user: action.email,
    };
  default:
    return state;
  }
};
export default user;
