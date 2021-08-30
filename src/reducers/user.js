// Esse reducer será responsável por tratar as informações da pessoa usuária

// Importa a action que será usada na página de Login
import { ACTION_EMAIL } from '../actions/actionTypes';

// Cria-se um state inicial apenas com a chave email vazia
const INITIAL_STATE_USER = {
  email: '',
};

export default function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  // Caso o type da action for a ACTION_EMAIL, que até o momento é a única, então retorna o objeto abaixo com as devidas alterações.
  case ACTION_EMAIL:
    return { ...state, email: action.payload };
  // Caso não for, apenas retorna o state, para não dar undefined
  default:
    return state;
  }
}
