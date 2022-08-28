import { Ticker as TickerItem, Data, Percent, StockSymbol } from './tickerStyles';

export const Ticker = (props) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent: changePercent,
    dividend,
    yield: stockYield,
    last_trade_time: lastTrade,
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
        <Percent style={{ width: 'auto', maxWidth: '9.5rem' }}>{changePercent}</Percent>
      </Data>
      <Data>
        <span>{dividend}</span>
      </Data>
      <Data>
        <span>{stockYield}</span>
      </Data>
      <Data>
        <span>{lastTrade}</span>
      </Data>
    </TickerItem>
  );
};
