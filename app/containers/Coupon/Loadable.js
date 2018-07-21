/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import('./coupon_index'),
  loading: LoadingIndicator,
});
