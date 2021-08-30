// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE_USER = {
  user: {
    email: '',
    password: '',
  },
};

function ReducerUser(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case 'ADD_USERFORMS':
    return { ...state, user: action.payload };
  default:
    return state;
  }
}

export default ReducerUser;
