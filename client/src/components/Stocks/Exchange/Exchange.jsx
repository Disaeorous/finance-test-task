import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStocks, pending, error } from '../../../redux/stockSlice';
import { socket } from '../../../data/socketIO';

import { Exchange as ExchangeList } from './exchangeStyles';
import { Ticker, Headings } from '../Ticker';

// export const updateStock = async (stock, dispatch) => {
//   dispatch(pending());
//   try {
//     dispatch(setStocks(stock));
//   } catch (err) {
//     dispatch(error());
//   }
// };

export const Exchange = () => {
  const stock = useSelector((state) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`User: ${socket.id} connected ${socket.connected}`);
    });
    socket.emit('start');
    socket.on('ticker', (exchange) => {
      dispatch(setStocks(exchange));
    });

    return () => {
      socket.close();
      socket.on('disconnect', () => {
        console.log(`User: ${socket.id} connected ${socket.connected}`);
      });
    };
  }, []);

  return (
    <ExchangeList>
      <Headings />

      {stock.map((ticker, index) => {
        return <Ticker key={index} {...ticker} />;
      })}
    </ExchangeList>
  );
};
