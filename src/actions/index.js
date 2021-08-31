import { LOGIN } from './actionTypes';

const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export default loginAction;
