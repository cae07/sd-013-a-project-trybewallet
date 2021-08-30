import { EMAIL_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_LOGIN:
    return {
      ...state, Pessoal: action.payload,
    };
  default: return state;
  }
};

export default reducer;
