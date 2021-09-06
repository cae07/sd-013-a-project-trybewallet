// Cria um estado inicial para o reducer 'user'
const INITIAL_STATE = {
  email: '',
};

// Cria o reducer user
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // caso EMAIL_VALID, mantém o estado e altera a chave email.
  case 'EMAIL_VALID':
    return {
      ...state,
      email: action.email,
    };

    // caso não encontre nenhum caso, retorna o estado atual
  default:
    return state;
  }
};

// exporta o reducer user que será utilizado ...
export default user;
