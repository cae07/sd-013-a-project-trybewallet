// 3.3.1 criar o user reducer

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, email: action.value };
  default: return state;
  }
};

export default user;
