
import { UPLOAD_IMAGE, DISCARD_UPLOADED_IMAGE } from './constants';

export function uploadImage(imageData) {
  return {
    type: UPLOAD_IMAGE,
    payload: imageData,
  };
}

export function discardUploadedImage() {
  return {
    type: DISCARD_UPLOADED_IMAGE,
  };
}
