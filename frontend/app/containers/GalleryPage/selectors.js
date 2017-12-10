import _ from 'lodash';
import { createSelector } from 'reselect';

/**
 * Direct selector to the summaryShopPage state domain
 */
const selectGalleryPageDomain = (state) => state.get('galleryPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SummaryShopPage
 */

const makeSelectSelectedImage = () => createSelector(
    selectGalleryPageDomain,
  (substate) => _.get(substate.toJS(), 'selectedImage')
);

export {
    makeSelectSelectedImage,
};
