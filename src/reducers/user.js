const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'test':
    return state;
  default:
    return state;
  }
};

export default user;
