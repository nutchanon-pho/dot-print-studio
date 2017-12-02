import { fromJS } from 'immutable';

import {
  CROP_IMAGE,
  INITIALIZE_CROPPER,
} from './constants';

const initialState = fromJS({});

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_CROPPER:
      return state.set('cropper', action.cropper);
    case CROP_IMAGE:
      const cropper = state.get('cropper');
      console.log(cropper);
      return state.set('croppedImage', cropper.getCroppedCanvas().toDataURL());
    default:
      return state;
  }
}
