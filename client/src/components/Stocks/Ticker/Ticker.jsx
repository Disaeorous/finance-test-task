import { Ticker as TickerItem, Data, Percent, StockSymbol } from './tickerStyles';

export const Ticker = (props) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    stock_yield,
    last_trade_time,
  } = props;

  return (
    <TickerItem>
      <Data>
        <StockSymbol style={{ width: 'calc(100% - 1.8rem)' }}>{ticker}</StockSymbol>
      </Data>
      <Data>
        <span>{exchange}</span>
      </Data>
      <Data>
        <span style={{ fontWeight: 'var(--fw-700)' }}>{price}</span>
      </Data>
      <Data>
        <span style={{ color: 'var(--green-border)' }}>{change}</span>
      </Data>
      <Data>
        <Percent style={{ width: 'auto', maxWidth: '9.5rem' }}>{change_percent}</Percent>
      </Data>
      <Data>
        <span>{dividend}</span>
      </Data>
      <Data>
        <span>{stock_yield}</span>
      </Data>
      <Data>
        <span>{last_trade_time}</span>
      </Data>
    </TickerItem>
  );
};
