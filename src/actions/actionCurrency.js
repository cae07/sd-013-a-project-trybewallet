import { CURRENCY_SUCCESS } from './index';

export default function actionCurrency(payload) {
  return {
    type: CURRENCY_SUCCESS,
    payload,
  };
}
