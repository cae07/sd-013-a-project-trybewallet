// import LOGIN_SUCCESS from './index';
import LOGIN_SUCCESS from './index';

export default function loginAction(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}
