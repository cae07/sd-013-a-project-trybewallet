// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_STATE = {
  email: '',
};
function user(state = USER_STATE, action) {
  switch (action.type) {
  case 'saveEmail':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
