import { USER_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return ({
      ...state,
      user: action.payload,
    });
  default:
    return state;
  }
};

export default myReducer;
