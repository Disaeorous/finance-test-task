import { Ticker } from './Ticker';
import { Exchange } from './Exchange';

export const Stocks = () => {
  return (
    <section className='stocks'>
      <Exchange>
        <Ticker />
      </Exchange>
    </section>
  );
};
