
import { fromJS } from 'immutable';
import productConfigurationPageReducer from '../reducer';

describe('productConfigurationPageReducer', () => {
  it('returns the initial state', () => {
    expect(productConfigurationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
