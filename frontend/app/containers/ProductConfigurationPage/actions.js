/*
 *
 * ProductConfigurationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_FORM,
  USE_IMAGE,
  DISCARD_CONFIG,
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

export function discardConfig() {
  return {
    type: DISCARD_CONFIG,
  };
}
