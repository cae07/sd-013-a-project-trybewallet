import { USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.payload,
    };

  default:
    return state;
  }
}

export default user;
