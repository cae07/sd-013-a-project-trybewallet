const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    return { email: action.payload };
  default:
    return state;
  }
};

export default user;
