// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE_USER = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case 'ADD_USERFORMS':
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default user;
