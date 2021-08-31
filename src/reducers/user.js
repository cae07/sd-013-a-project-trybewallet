// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_PERSONAL_INFO } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const personalInformation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PERSONAL_INFO:
    return {
      ...state, user: action.payload,
    };
  default:
    return state;
  }
};

export default personalInformation;
