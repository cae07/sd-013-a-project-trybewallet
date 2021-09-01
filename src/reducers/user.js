import { SET_USER_VALUE } from '../actions/index';

const initialState = {
  user: {
    email: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_VALUE:
    return ({
      ...state,
      email: action.payload,
    });
  default: return state;
  }
};

export default user;
