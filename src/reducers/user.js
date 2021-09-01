import { GET_EMAIL } from '../actions';

const FIRST_STATE = {
  email: '',
};

const user = (state = FIRST_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
