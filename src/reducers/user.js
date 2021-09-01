// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    return { ...state,
      user: action.user,
    };
  default:
    return state;
  }
};

export default user;
