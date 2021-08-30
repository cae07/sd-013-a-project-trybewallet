// Esse reducer será responsável por tratar as informações da pessoa usuária
import INITIAL_STATE from '../helpers/initialState';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PRIMEIRA_ACTION':
    return { ...state, email: action.value };
  default:
    return state;
  }
};

export default user;
