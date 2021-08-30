import currenciesAPI from '../services';

// Importa as action types do User e do Wallet
import {
  ACTION_EMAIL, // User
  ACTION_REQUEST_START, // Wallet
  ACTION_REQUEST_SUCCESS, // Wallet
  ACTION_REQUEST_FAIL, // Wallet
  ACTION_SAVE_EXPENSE, // Wallet
  ACTION_DELETE_EXPENSE, // Wallet
  ACTION_EDIT_EXPENSE_START, // Wallet
  ACTION_EDIT_EXPENSE_END, // Wallet
} from './actionTypes';

// Esta action vai ser usada na page Login, dentro do mapDispatchToProps que vai receber como payload o email.
// Dentro da mapDispatchToProps vai ter a chave handleEmail que recebe o payload como parametro, que quando ela é chamada no componente, será passado o email.
// Com isso a chave além de receber o parametro ela dispara a dipatch com o mesmo parametro, que é o payload, que é o email.
export const actionEmailChange = (payload) => ({
  type: ACTION_EMAIL,
  payload,
});

// Action para gerar o request para conexao com a API de Moedas
const actionRequestCurrenciesTry = () => ({
  type: ACTION_REQUEST_START,
});

// Esta action é quando obtiver o retorno positivo de onexão com a API de Moedas
const actionRequestCurrenciesSuccess = (currencies) => ({
  type: ACTION_REQUEST_SUCCESS,
  currencies,
});

// Esta action é quando obtiver o retorno negativo de onexão com a API de Moedas
const actionRequestCurrenciesFail = (error) => ({
  type: ACTION_REQUEST_FAIL,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    // Dispara a action de tentativa de conexão com a API de Moedas
    dispatch(actionRequestCurrenciesTry());
    const currencies = await currenciesAPI();
    dispatch(actionRequestCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(actionRequestCurrenciesFail(error));
  }
};

export const actionSaveExpense = (expenses) => ({
  type: ACTION_SAVE_EXPENSE,
  expenses,
});

export const actionDeleteExpense = (expense) => ({
  type: ACTION_DELETE_EXPENSE,
  expense,
});

export const actionEditExpense = (expense) => ({
  type: ACTION_EDIT_EXPENSE_START,
  expense,
});

export const actionEndExpenseEdit = (expense) => ({
  type: ACTION_EDIT_EXPENSE_END,
  expense,
});
