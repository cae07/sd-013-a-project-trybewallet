import { LOGIN_ACTION } from './action_types';

export default function loginAction(email) {
  return {
    type: LOGIN_ACTION,
    email,
  };
}
