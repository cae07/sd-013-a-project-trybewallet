// Esse reducer será responsável por tratar as informações da pessoa usuária
// importar as actions
import { LOGIN_SUBMIT } from '../actions';

// declarar o estado inicial
const initialState = {
  email: 'alguem@email.com',
};

// ---------------------------------------------------------------------------------------
// Source: https://www.pluralsight.com/guides/deeply-nested-objectives-redux;
// Guia que explica sobre a sintaxe que deve ser utilizada no retorno dos reducers
// quando há a necessidade de atualizar uma propriedade do estado global que está em
// niveis mais baixos no objeto.
// Exemplo:
//   return { ...state, user: { ...state.user, email: action.payload } };
// ---------------------------------------------------------------------------------------

function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
