
import { UPLOAD_IMAGE } from './constants';

export function uploadImage(imageData) {
  return {
    type: UPLOAD_IMAGE,
    payload: imageData,
  };
}
