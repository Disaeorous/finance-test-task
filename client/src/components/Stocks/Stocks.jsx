import { Provider } from 'react-redux';
import reduxStore from '../../redux/store';

import { Exchange } from './Exchange';

export const Stocks = () => {
  return (
    <Provider store={reduxStore}>
      <section className='stocks'>
        <Exchange />
      </section>
    </Provider>
  );
};
