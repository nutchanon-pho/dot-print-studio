import { SELECT_NEW_ORDER, UNSELECT_NEW_ORDER } from './constants';

export function selectNewOrder(invoiceNumber) {
  return {
    type: SELECT_NEW_ORDER,
    payload: invoiceNumber,
  };
}

export function unselectNewOrder(invoiceNumber) {
  return {
    type: UNSELECT_NEW_ORDER,
    payload: invoiceNumber,
  };
}

