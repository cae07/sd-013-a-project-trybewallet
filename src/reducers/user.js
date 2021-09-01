import { SET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return { ...state, inputLogin: action.payload };
  default:
    return state;
  }
};

export default reducer;
