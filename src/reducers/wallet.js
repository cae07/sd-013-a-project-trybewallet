import { ADD_EXPENSE,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCESS,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCESS:
    return ({
      ...state,
      // Estava usando Object.values, a renderização estava funcionando porém o avaliador não passava
      // acredito por serem objetos e ele esperar simples strings
      // olhando o código do Gabriel Lenz https://github.com/tryber/sd-013-a-project-trybewallet/blob/gabriellenz-trybewallet/src/actions/index.js
      // fiz o teste usando keys e funcionou
      currencies: [...Object.keys(action.payload)],
    });
  case GET_CURRENCIES_FAILED:
    return ({
      ...state,
      currencies: [0],
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    });
  default:
    return state;
  }
}

export default wallet;
