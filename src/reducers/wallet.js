// Requisito 7 - 5º Passo / Requisito 8 - 4º Passo - Importar as actionsType
import { ADD_EXPENSES, GET_CURRENCIES, REQUEST_CURRENCIES } from '../actions/actionsType';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

// Requisito 7 - 6º Passo - configurar o reducer
const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;
  case GET_CURRENCIES:
    return { ...state, currencies: action.json };
  case ADD_EXPENSES
    return { ...state, expenses: action.expenses };
    default:
    return state;
  }
};

export default wallet;

// Continuação do Requisito 7 e 8 'src/pages/Wallet.js'
