// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Cria um estado inicial para o reducer 'user'
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: true,
};

// Cria o reducer user
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // caso EMAIL_VALID, mantém o estado e altera a chave email.
  case 'EMAIL_VALID':
    return {
      ...state,
      email: action.currencies,
    };

    // caso não encontre nenhum caso, retorna o estado atual
  default:
    return state;
  }
};

// exporta o reducer user que será utilizado ...
export default wallet;
