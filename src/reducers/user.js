// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REGISTER_USER } from '../actions';

const initialState = {
  email: '',
};

function reducerUser(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
      return { ...state, email: payload };
      
  default:
    return state;
  }
}

export default reducerUser;
