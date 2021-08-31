import getEconomyAwesome from '../services/economyAPI';

// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ECONOMY_API_REQUEST = 'ECONOMY_API_REQUEST';
export const ECONOMY_API_SUCESS = 'ECONOMY_API_SUCESS';
export const ECONOMY_API_FAILED = 'ECONOMY_API_SUCESS';

export const ECONOMY_SAVE_EXPENSE = 'ECONOMY_SAVE_EXPENSE';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});

const economyApiRequest = () => ({
  type: ECONOMY_API_REQUEST,
});

const economyApiSucess = (payload) => ({
  type: ECONOMY_API_SUCESS, payload,
});

const economyApiFailed = (error) => ({
  type: ECONOMY_API_FAILED, error,
});

export const economySaveExpense = (payload) => ({
  type: ECONOMY_SAVE_EXPENSE, payload,
});

const economyAPI = () => async (dispatch) => {
  try {
    dispatch(economyApiRequest());
    const currencies = await getEconomyAwesome();
    dispatch(economyApiSucess(currencies));
  } catch (error) {
    dispatch(economyApiFailed(error));
  }
};

export default economyAPI;
