// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Importa as actions de API e Expenses
import {
  ACTION_REQUEST_START, // API
  ACTION_REQUEST_SUCCESS, // API
  ACTION_REQUEST_FAIL, // API
  ACTION_SAVE_EXPENSE, // Expenses
  ACTION_DELETE_EXPENSE, // Expenses
  ACTION_EDIT_EXPENSE_START, // Expenses
  ACTION_EDIT_EXPENSE_END, // Expenses
} from '../actions/actionTypes';

// Cria-se um state inicial apenas com a chave currencies e expenses vazia
const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case ACTION_REQUEST_START: // Action para gerar o request para conexao com a API de Moedas.
    return { // Retorna a própria state com a chave isFetching true, indicando que está solicitando o Feetch
      ...state,
      isFetching: true,
    };
  case ACTION_REQUEST_SUCCESS: // Esta action é quando obtiver o retorno positivo de conexão com a API de Moedas.
    return { // Retorna a própria state com a chave isFetching false indicando que já não está fazendo mais fetch pois fez e retornou com sucesso.
      ...state,
      isFetching: false,
      currencies: [...Object.keys(action.currencies)], // A chave currencies vai guardar o nome das chaves que a action retornou, que no caso são as moedas
    };
  case ACTION_REQUEST_FAIL: // Esta action é quando obtiver o retorno negativo de onexão com a API de Moedas
    return { // Ela retorna o próprio state, aponta que já fez o fetching e grava na chave error o erro dado
      ...state,
      isFetching: false,
      error: action.error };
  case ACTION_SAVE_EXPENSE: // Action para salvar a Expense
    return { // Retorna o próprio state e na chave expenses retorna a expense que já tinha, e adiciona/altera a informação nova que recebe como parametro estilo payload
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case ACTION_DELETE_EXPENSE: // Action para deletar a Expense
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.expense.id),
      ],
      isEditing: false, // Altera para isEditing como false, pois está deletando e não editando
    };
  case ACTION_EDIT_EXPENSE_START:
    return { // Retorna o próprio state
      ...state,
      isEditing: true, // Altera para isEditing como true, pois agora está editando
      expenseId: action.expense.id,
    };
  case ACTION_EDIT_EXPENSE_END:
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.expense.id) return { ...item, ...action.expense };
        return item;
      }),
      isEditing: false,
    };
  default:
    return state;
  }
}
