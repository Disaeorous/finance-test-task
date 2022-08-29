import React, { useEffect } from 'react';
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

// TODO: Refactor this component
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

      {console.log(stock)}
      {/* {Object.keys(stock).map((ticker, index) => {
        return (
          <React.Fragment key={index}>
            {stock[ticker].map((item, index) => {
              return <Ticker key={index} {...item} />;
            })}
          </React.Fragment>
        );
      })} */}

      {stock.map((ticker, index) => {
        return <Ticker key={index} {...ticker} />;
      })}
    </ExchangeList>
  );
};
