// Actions
import { SET_EMAIL } from '../actions';

// Estado inicial
const INITIAL_STATE = {
  email: '',
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
// "userReducer"
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL: {
    return {
      ...state,
      email: action.emailInput,
    };
  }
  default: {
    return state;
  }
  }
};

export default user;
