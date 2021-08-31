const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'show':
    return state;
  default:
    return state;
  }
};

export default user;
