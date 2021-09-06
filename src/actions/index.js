export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

export const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
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
  dispatch(saveEmailAction());

  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    return dispatch(successAction(data));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};
