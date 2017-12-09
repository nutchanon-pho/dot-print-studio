import { createSelector } from 'reselect';

/**
 * Direct selector to the summaryShopPage state domain
 */
const selectSummaryShopPageDomain = (state) => state.get('summaryShopPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SummaryShopPage
 */

const makeSelectSummaryShopPage = () => createSelector(
  selectSummaryShopPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSummaryShopPage;
export {
  selectSummaryShopPageDomain,
};
