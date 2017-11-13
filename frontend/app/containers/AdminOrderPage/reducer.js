import { fromJS, Set } from 'immutable';

import {
    SELECT_NEW_ORDER,
    UNSELECT_NEW_ORDER,
    ADD_TO_WORKING_LIST,
} from './constants';

// The initial state of the App
const data = [{
  invoiceNumber: '34923423',
  product: 'Canvas',
  size: '30x30',
  detail: 'Border (Black)',
  volume: 1,
  image: 'https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547',
}, {
  invoiceNumber: '5804893',
  product: 'Poster',
  size: 'A3',
  detail: 'Paper (Black)',
  volume: 2,
  image: 'https://i.ytimg.com/vi/dRclC4ZnWwU/maxresdefault.jpg',
}];

const initialState = fromJS({
  newOrderList: data,
  selectedNewOrder: Set(),
  workingList: [],
});

function adminOrderReducer(state = initialState, { type, payload }) {
  const selectedNewOrder = state.get('selectedNewOrder');
  const workingList = state.get('workingList');
  switch (type) {
    case SELECT_NEW_ORDER:
      return state.set('selectedNewOrder', selectedNewOrder.add(payload));
    case UNSELECT_NEW_ORDER:
      return state.set('selectedNewOrder', selectedNewOrder.delete(payload));
    case ADD_TO_WORKING_LIST:
      return state.set('workingList', workingList.concat(payload)).set('selectedNewOrder', Set());
    default:
      return state;
  }
}

export default adminOrderReducer;
