const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'email':
    return { ...state, email: action.state.email };
  default:
    return state;
  }
};

export default user;
