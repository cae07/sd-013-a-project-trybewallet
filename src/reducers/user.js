const initialState = {
  email: '',
  pass: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_ACT':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default user;
