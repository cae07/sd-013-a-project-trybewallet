import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO:
    return { ...state, email: action.payload.email, password: action.payload.password };
  default:
    return state;
  }
}

export default reducer;
