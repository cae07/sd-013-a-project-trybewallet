// Coloque aqui suas actions

export const GET_USER_EMAIL = 'GET_USER_EMAIL';

export const COINS_LOADING = 'COINS_LOADING';
export const COINS_SUCCESS = 'COINS_SUCCESS';
export const COINS_FAIL = 'COINS_FAIL';

export const getUserEmail = (payload) => ({
  type: GET_USER_EMAIL,
  email: payload,
});

const coinsLoading = () => ({ type: COINS_LOADING });
const coinsSuccess = (coins) => ({
  type: COINS_SUCCESS,
  coins,
});
const coinsFail = (error) => ({
  type: COINS_FAIL,
  error,
});

export const getCoins = () => async (dispatch) => {
  dispatch(coinsLoading);
  try {
    const coinsLabelResponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinsLabel = await coinsLabelResponse.json();
    delete coinsLabel.USDT;
    dispatch(coinsSuccess(coinsLabel));
  } catch (error) {
    dispatch(coinsFail(error));
  }
};
