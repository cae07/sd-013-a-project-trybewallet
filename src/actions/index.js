import getApi from '../services/getCurrentExchangeApi';
import {
  USER_INFO,
  GET_CURRENTEXCHANGE_SUCCESS,
  GET_CURRENTEXCHANGE_FAIL,
} from './actionTypes';

export const actionUserInfo = (email) => ({
  type: USER_INFO,
  email,
});

const actionGetCurrentExchangeSuccess = (
  payload, { value, description, currency, method, tag, id },
) => ({
  type: GET_CURRENTEXCHANGE_SUCCESS,
  payload,
  id,
  value,
  description,
  currency,
  method,
  tag,
});

const actionGetCurrentExchangeFail = (error) => ({
  type: GET_CURRENTEXCHANGE_FAIL,
  error,
});

export const fetchCurrentExchange = (info) => (dispatch) => getApi()
  .then(
    (data) => dispatch(actionGetCurrentExchangeSuccess(data, info)),
    (error) => dispatch(actionGetCurrentExchangeFail(error)),
  );
