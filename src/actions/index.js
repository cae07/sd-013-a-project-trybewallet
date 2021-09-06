export const GET_EMAIL = 'GET_EMAIL';
export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  email: payload,
});

export const Fetching = () => ({
  type: FETCHING,
});
export const FetchSuccess = (json) => ({
  type: FETCHING_SUCCESS,
  json,
});
export const FetchFail = (error) => ({
  type: FETCHING_FAIL,
  error,
});

const requestFetchAPI = async (url) => {
  const request = await fetch(url);
  const json = await request.json();
  return json;
};

export const requestAPI = () => (dispatch) => requestFetchAPI('https://economia.awesomeapi.com.br/json/all')
  .then(
    (json) => {
      delete json.USDT;
      dispatch(FetchSuccess(json));
    },
    (error) => dispatch(FetchFail(error)),
  );
