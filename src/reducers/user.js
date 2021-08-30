import { ADD_CONTACT } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CONTACT:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
