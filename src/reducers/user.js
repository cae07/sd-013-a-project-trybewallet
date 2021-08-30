import { ENVIAR_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case ENVIAR_EMAIL:
    return {
      ...state,
      email: action.user,
    };
  default:
    return state;
  }
};

export default userReducer;
