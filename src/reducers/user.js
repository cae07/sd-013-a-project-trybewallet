import { USER_LOGGED_IN } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGGED_IN: {
    return { email: action.payload };
  }
  default:
    return state;
  }
};

export default userReducer;
