import ADD_CONTACT from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CONTACT:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
