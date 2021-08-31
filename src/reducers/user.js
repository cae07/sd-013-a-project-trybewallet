const initialState = {
  email: '',
  pass: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'VERIFY_USER':
    return { ...state, ...action.state };
  default:
    return state;
  }
};

export default user;
