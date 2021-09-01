import { SAVE_EMAIL, SUCCESS_TYPE, ERROR_TYPE } from '../actions';

const initialState = {
  email: '',
  password: '',
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case SAVE_EMAIL:
    return { ...state, email: payload };

  case SUCCESS_TYPE:
    return { ...state, data: payload };

  case ERROR_TYPE:
    return { ...state, error: payload };

  default:
    return state;
  }
}

export default wallet;
