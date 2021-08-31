// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CLICK_ENTER } from '../actions/userActions';

const initialState = {
  email: '',
  despesa: 0,
};

function user(state = initialState, action) {
  switch (action.type) {
  case CLICK_ENTER:
    return { ...state, email: action.payload };

  default:
    return state;
  }
}

export default user;
