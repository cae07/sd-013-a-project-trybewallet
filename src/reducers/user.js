// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return { ...state, newInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;
