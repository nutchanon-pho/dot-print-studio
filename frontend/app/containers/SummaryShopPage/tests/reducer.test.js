
import { fromJS } from 'immutable';
import summaryShopPageReducer from '../reducer';

describe('summaryShopPageReducer', () => {
  it('returns the initial state', () => {
    expect(summaryShopPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
