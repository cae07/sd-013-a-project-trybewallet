import { SAVE_EMAIL, SAVE_ID } from '../actions';

const INITIAL_STATE = {
  email: '',
  id: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  case SAVE_ID:
    return {
      ...state,
      id: state.id + 1,
    };
  default:
    return state;
  }
};

export default userReducer;
