import { EMAIL, PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL:
    return {
      ...state, email: action.payload,
    };
  case PASSWORD:
    return {
      ...state, password: action.payload,
    };
  default: return state;
  }
};

export default user;
