import { createSelector } from 'reselect';

/**
 * Direct selector to the productConfigurationPage state domain
 */
const selectProductConfigurationPageDomain = (state) => state.get('productConfiguration');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductConfigurationPage
 */

const makeSelectProductConfigurationPage = () => createSelector(
  selectProductConfigurationPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectProductConfigurationPage;
export {
  selectProductConfigurationPageDomain,
};
