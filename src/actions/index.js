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

export const actionEmailChange = (payload) => ({
  type: ACTION_EMAIL,
  payload,
});

// Action para gerar a conexao com a API de Moedas
const actionRequestCurrenciesTry = () => ({
  type: ACTION_REQUEST_START,
});

const actionRequestCurrenciesSuccess = (currencies) => ({
  type: ACTION_REQUEST_SUCCESS,
  currencies,
});

const actionRequestCurrenciesFail = (error) => ({
  type: ACTION_REQUEST_FAIL,
  error,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
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
