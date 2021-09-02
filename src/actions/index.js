import getApi from '../services/getCurrentExchangeApi';
import {
  USER_INFO,
  GET_CURRENTEXCHANGE_SUCCESS,
  GET_CURRENTEXCHANGE_FAIL,
  DELETE_ITEMS,
  UPDATE_ITEMS_MODE,
  UPDATE_ITEMS,
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

export const actionDeletePurchaseItems = (payload) => ({
  type: DELETE_ITEMS,
  payload,
});

export const fetchCurrentExchange = (info) => (dispatch) => getApi()
  .then(
    (data) => dispatch(actionGetCurrentExchangeSuccess(data, info)),
    (error) => dispatch(actionGetCurrentExchangeFail(error)),
  );

export const actionUpadateMode = (id) => ({
  type: UPDATE_ITEMS_MODE,
  id,
});

export const actionUpadatePurchase = (payload) => ({
  type: UPDATE_ITEMS,
  payload,
});
