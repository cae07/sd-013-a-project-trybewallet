export const GET_EMAIL = 'GET_EMAIL';

export const COIN_LOAD = 'COIN_LOAD';
export const COIN_SUCCESS = 'COIN_SUCCESS';
export const COIN_FAIL = 'COIN_FAIL';

export const SPENT_SUCC = 'SPENT_SUCC';

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  email: payload,
});

const coinLoad = () => ({ type: COIN_LOAD });

const coinSucc = (coin) => ({
  type: COIN_SUCCESS,
  coin,
});

const coinFail = (error) => ({
  type: COIN_FAIL,
  error,
});

const spentSucc = (payload, exchangeRates) => ({
  type: SPENT_SUCC,
  spent: {
    ...payload,
    exchangeRates,
  },
});

const fetchAPI = async () => {
  const apiResp = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiLabel = await apiResp.json();
  delete apiLabel.USDT;
  return apiLabel;
};

export const getCoin = () => async (dispatch) => {
  dispatch(coinLoad);
  try {
    const coinLabel = await fetchAPI();
    dispatch(coinSucc(coinLabel));
  } catch (error) {
    dispatch(coinFail(error));
  }
};

export const addSpent = (payload) => async (dispatch) => {
  dispatch(coinLoad);
  try {
    const exchangeRates = await fetchAPI();
    dispatch(spentSucc(payload, exchangeRates));
  } catch (error) {
    dispatch(coinFail(error));
  }
};
