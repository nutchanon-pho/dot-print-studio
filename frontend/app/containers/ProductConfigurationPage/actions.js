/*
 *
 * ProductConfigurationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_FORM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateForm(form) {
  return {
    type: UPDATE_FORM,
    form,
  };
}
