import { createSelector } from 'reselect';

const selectUploadImage = (state) => state.get('uploadImage');

const makeSelectUploadedImage = () => createSelector(
    selectUploadImage,
  (state) => {
    if (state) {
      return state.get('uploadedImage');
    }
    return null;
  }
);

export {
    selectUploadImage,
    makeSelectUploadedImage,
};
