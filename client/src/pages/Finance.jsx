import { useEffect, useState } from 'react';
import { socket } from '../data/socketIO';

import { Stocks } from '../components/Stocks';

export const Finance = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Status connect: ${socket.connected}. User: ${socket.id}`);
      socket.emit('start');
    });

    socket.on('ticker', (quotes) => {
      if (socket.connected === true) {
        setTickers(quotes);
      }
    });

    return () => {
      socket.on('disconnect', function () {
        console.log('disconnected to server r');
      });
      socket.close();
    };
  }, [setTickers]);

  return (
    <>
      <Stocks></Stocks>
      {/* {console.log(tickers)}
      {tickers &&
        tickers.map((ticker, index) => {
          return (
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              key={index}
            >
              <h1>{ticker.ticker}</h1>
              <p>{ticker.exchange}</p>
              <p>{ticker.price}</p>
              <p>{ticker.change}</p>
              <p>{ticker.change_percent}</p>
              <p>{ticker.dividend}</p>
              <p>{ticker.yield}</p>
              <p>{ticker.last_trade_time}</p>
            </div>
          );
        })} */}
    </>
  );
};
