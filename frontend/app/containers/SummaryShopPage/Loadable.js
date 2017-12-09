/**
 *
 * Asynchronously loads the component for SummaryShopPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
