const INITIAL_STATE = {
  email: '',
  redirect: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return {
      ...state,
      email: action.email,
      redirect: action.redirect,
    };

  default:
    return state;
  }
};

export default loginReducer;
