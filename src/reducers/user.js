// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};
export default user;

// peguei como base o codigo do exercicio forms redux, consultei a branch gabarito, e fui acompanhando no paralelo a explicação do Wolf e do Icaro simutaneamente .
