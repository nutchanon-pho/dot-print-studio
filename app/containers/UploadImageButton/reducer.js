import { UPLOAD_IMAGE } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  uploadedImage: null,
});

function uploadImageReducer(state = initialState, action) {
  console.log('uploadImageReducer');
  console.log('uploadImageReducer state', state);
  switch (action.type) {
    case UPLOAD_IMAGE:
      return state.set('uploadedImage', action.payload);
    default:
      return state;
  }
}

export default uploadImageReducer;
