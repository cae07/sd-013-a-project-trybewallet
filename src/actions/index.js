// Coloque aqui suas actions
import USER_CHECK from './actionTypes';

const actionSendUser = (userDataInfo) => ({
  type: USER_CHECK,
  userDataInfo,
});

export default actionSendUser;
