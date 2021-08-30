// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_STATE = {
  user: {
    email: '',
  },
};
function userReducer(state = USER_STATE, action) {
  switch (action.type) {
  case '':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
