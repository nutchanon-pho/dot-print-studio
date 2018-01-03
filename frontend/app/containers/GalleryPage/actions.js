import { SELECT_IMAGE } from './constants';

export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image,
  };
}
