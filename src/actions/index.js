import USER_LOGIN from './actionTypes';

const actionUser = (payload) => ({
  type: USER_LOGIN,
  email: payload.email,
});

export default actionUser;
