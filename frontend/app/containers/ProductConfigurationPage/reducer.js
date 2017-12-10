/*
 *
 * ProductConfigurationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_FORM,
  USE_IMAGE,
  DISCARD_CONFIG,
  INITIALIZE_CROPPER,
  CROP_IMAGE,
  UPLOAD_IMAGE,
  DISCARD_UPLOADED_IMAGE,
} from './constants';

const initialState = fromJS({
});

function productConfigurationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_FORM:
      return state.set('form', action.form);
    case USE_IMAGE:
      return state.set('usedImage', action.image);
    case DISCARD_CONFIG:
      return state.set('uploadedImage', null).set('selectedImage', null).set('croppedImage', null);
    case INITIALIZE_CROPPER:
      return state.set('cropper', action.cropper).set('isCropperInitialized', true);
    case CROP_IMAGE:
      const cropper = state.get('cropper');
      return state.set('croppedImage', cropper.getCroppedCanvas().toDataURL());
    case UPLOAD_IMAGE:
      return state.set('uploadedImage', action.payload);
    case DISCARD_UPLOADED_IMAGE:
      return state.set('uploadedImage', null);
    default:
      return state;
  }
}

export default productConfigurationPageReducer;
