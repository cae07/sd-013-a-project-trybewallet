export const EMAIL_LOGIN = 'EMAIL_LOGIN';
/* export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE'; */

export const emailLogin = (payload) => ({
  type: EMAIL_LOGIN,
  payload,
});

/* export const loadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR_TYPE,
  payload,
});

export const fetchName = () => async (dispatch) => {
  dispatch(loadinAction());
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    return dispatch(successAction(data));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
}; */
