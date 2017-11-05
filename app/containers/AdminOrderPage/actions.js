import { SELECT_NEW_ORDER, UNSELECT_NEW_ORDER, ADD_TO_WORKING_LIST } from './constants';
import { Set } from 'immutable';

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

export function addToWorkingList(newOrderSet) {
  return {
    type: ADD_TO_WORKING_LIST,
    payload: newOrderSet.toArray(),
  };
}

