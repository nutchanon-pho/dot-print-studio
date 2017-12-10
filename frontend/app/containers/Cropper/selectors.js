import { createSelector } from 'reselect';

const selectProductConfig = (state) => state.get('productConfig');

const makeSelectUploadedImage = () => createSelector(
  selectProductConfig,
  (state) => {
    if (state) {
      return state.get('uploadedImage');
    }
    return null;
  }
);

const makeSelectCropper = () => createSelector(selectProductConfig, (state) => (state.get('cropper')));
const makeSelectCroppedImage = () => createSelector(selectProductConfig, (state) => {
  if (state) {
    return state.get('croppedImage');
  } return null;
});

export {
    makeSelectUploadedImage,
    makeSelectCropper,
    makeSelectCroppedImage,
};
