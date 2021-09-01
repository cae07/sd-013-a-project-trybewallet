import USER_LOGIN from './actionTypes';

const actionUser = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});

export default actionUser;
