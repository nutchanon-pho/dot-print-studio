/**
 *
 * Asynchronously loads the component for ProductConfigurationPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
