// import { ADD_USER } from '../actions/index';

// const INITIAL_STATE = {
//   user: {
//     email: '',
//   },
// };

// const user = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case ADD_USER:
//     return {
//       ...state,
//       email: action.email,
//     };
//   default:
//     return state;
//   }
// };

// export default user;

// const initialState = [];
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//   case 'LOGIN':
//     return '';

//   default:
//     return state;
//   }
// };

// export default userReducer;

const initialState = {
  user: {
    email: '',
  },

};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.email };

  default:
    return state;
  }
};

export default userReducer;
