/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => {
    console.log('selector', homeState);
    homeState.get('username');
  }
);

export {
  selectHome,
  makeSelectUsername,
};
