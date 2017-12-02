import { createSelector } from 'reselect';

const selectCropper = (state) => state.get('cropper');

const makeSelectUploadedImage = () => createSelector(
  selectCropper,
  (state) => {
    if (state) {
      return state.get('uploadedImage');
    }
    return null;
  }
);

const makeSelectCropper = () => createSelector(selectCropper, (state) => (state.get('cropper')));
const makeSelectCroppedImage = () => createSelector(selectCropper, (state) => {
  if (state) {
    return state.get('croppedImage');
  } return null;
});

export {
    makeSelectUploadedImage,
    makeSelectCropper,
    makeSelectCroppedImage,
};
