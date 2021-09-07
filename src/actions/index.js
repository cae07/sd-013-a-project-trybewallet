export const ADD_USER = 'USER';
export const WALLET = 'WALLET';

export const actionLogin = (email) => (
  { type: 'LOGIN',
    email });

const fetchLoading = () => ({
  type: 'LOADING',
  payload: {
    loading: true,
  },
});

export const fetchSuccess = (data) => ({
  type: 'FETCH_SUCCESS',
  payload: {
    currency: Object.keys(data),
    data },

  loading: false,
}
);

export const fetchError = (error) => ({
  type: 'FETCH_ERROR',
  payload: {
    error,
    loading: false,
  },
});
export const getApi = () => (dispatch) => {
  dispatch(fetchLoading());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export const actionSave = (saveState) => ({
  type: 'SAVE_STATE',
  saveState,

});
