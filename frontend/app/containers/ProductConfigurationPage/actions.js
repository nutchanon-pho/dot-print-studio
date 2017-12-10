/*
 *
 * ProductConfigurationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_FORM,
  USE_IMAGE,
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

export function useImage(image) {
  return {
    type: USE_IMAGE,
    image,
  };
}
