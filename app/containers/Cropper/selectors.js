import { createSelector } from 'reselect';

const selectUploadImage = (state) => state.get('uploadImage');

const makeSelectUploadedImage = () => createSelector(
    selectUploadImage,
  (state) => {
    console.log('makeSelectUploadedImage state', state);
    if (state) {
      return state.get('uploadedImage');
    }
  }
);

export {
    selectUploadImage,
    makeSelectUploadedImage,
};
