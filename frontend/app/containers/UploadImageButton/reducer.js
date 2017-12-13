import { fromJS } from 'immutable';
import { UPLOAD_IMAGE, DISCARD_UPLOADED_IMAGE } from './constants';

const initialState = fromJS({
  uploadedImage: null,
});

function uploadImageReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return state.set('uploadedImage', action.payload);
    case DISCARD_UPLOADED_IMAGE:
      return state.set('uploadedImage', null);
    default:
      return state;
  }
}

export default uploadImageReducer;
