import getCoins from '../Helpers/getCoins';

export const LOGIN = 'LOGIN';
export const LOADING = 'LOADING';
export const SAVE_SPENDINGS = 'SAVE_SPENDINGS';
export const FAILED = 'FAILED';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

export const actionLoading = () => ({
  type: LOADING,
});

export const actionSaveCoins = (payload) => ({
  type: SAVE_SPENDINGS,
  payload,
});

export const actionFailed = () => ({
  type: FAILED,
});

export const actionGetCoinsWithThunk = (spendings) => (dispatch) => {
  dispatch(actionLoading());
  return getCoins()
    .then(
      (payload) => dispatch(actionSaveCoins({ ...spendings, payload })),
      () => dispatch(actionFailed()),
    );
};
