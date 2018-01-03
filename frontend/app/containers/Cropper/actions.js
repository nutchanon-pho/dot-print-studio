import { CROP_IMAGE, INITIALIZE_CROPPER } from './constants';

export function initializeCropper(cropper) {
  return {
    type: INITIALIZE_CROPPER,
    cropper,
  };
}

export function cropImage() {
  return {
    type: CROP_IMAGE,
  };
}
