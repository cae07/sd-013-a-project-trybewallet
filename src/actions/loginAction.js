import LOGIN_SUCESS from './index';

export default function loginAction(payload) {
  return {
    type: LOGIN_SUCESS,
    payload,
  };
}
