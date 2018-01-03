import { fromJS } from 'immutable';
import { SELECT_IMAGE } from './constants';

const initialState = fromJS({
  selectedImage: null,
});

function galleryPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_IMAGE:
      return state.set('selectedImage', action.image);
    default:
      return state;
  }
}

export default galleryPageReducer;
