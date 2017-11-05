import { fromJS, Set } from 'immutable';

import {
    SELECT_NEW_ORDER,
    UNSELECT_NEW_ORDER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  selectedNewOrder: Set(),
});

function adminOrderReducer(state = initialState, { type, payload }) {
  console.log('payload', payload);
  const selectedNewOrder = state.get('selectedNewOrder');
  switch (type) {
    case SELECT_NEW_ORDER:
      return state.set('selectedNewOrder', selectedNewOrder.add(payload));
    case UNSELECT_NEW_ORDER:
      return state.set('selectedNewOrder', selectedNewOrder.delete(payload));
    default:
      return state;
  }
}

export default adminOrderReducer;
