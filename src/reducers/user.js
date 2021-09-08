import { INPUT_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INPUT_USER:
    return ({
      email: action.email,
    });
  default:
    return state;
  }
}
