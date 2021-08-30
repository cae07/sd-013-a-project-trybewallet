import { SAVE_EMAIL } from '../actions';

const initial = {
  email: '',
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
