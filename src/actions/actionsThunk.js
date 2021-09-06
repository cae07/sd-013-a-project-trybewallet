import {
  errorAction,
  loadingAction,
  sucessAction,
} from '.';
import fetchApi from '../utils/api';

const apiWithThunk = () => (dispatch) => {
  dispatch(loadingAction());

  return fetchApi()
    .then(
      (response) => dispatch(sucessAction(response)), () => dispatch(errorAction()),
    );
};

export default apiWithThunk;
