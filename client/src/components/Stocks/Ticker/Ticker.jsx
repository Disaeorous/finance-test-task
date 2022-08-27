import { Ticker as TickerStyle, Headings, Item, Data, Percent } from './tickerStyles';

export const Ticker = () => {
  const dummyTicker = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: 279.29,
    change: 64.52,
    change_percent: 0.84,
    dividend: 0.56,
    yield: 1.34,
    last_trade_time: '2021-04-30T11:53:21.000Z',
  };

  return (
    <TickerStyle>
      <Headings>
        <span>Ticker</span>
        <span>Exchange</span>
        <span>Price</span>
        <span>Change</span>
        <span>Change percent</span>
        <span>Dividend</span>
        <span>Yield</span>
        <span>Last trade time</span>
      </Headings>
      <Item>
        <Data>
          <span
            style={{
              backgroundColor: 'var(--white-base)',
              border: '1px solid var(--blue-border)',
              borderRadius: '0.2em',
              width: 'calc(100% - 0.8rem)',
            }}
          >
            {dummyTicker.ticker}
          </span>
        </Data>
        <Data>
          <span>{dummyTicker.exchange}</span>
        </Data>
        <Data>
          <span style={{ fontWeight: 'var(--fw-700)' }}>{dummyTicker.price}</span>
        </Data>
        <Data>
          <span style={{ color: 'var(--green-border)' }}>{dummyTicker.change}</span>
        </Data>
        <Data>
          <Percent style={{ width: 'auto', maxWidth: '9.5rem' }}>
            {dummyTicker.change_percent}
          </Percent>
        </Data>
        <Data>
          <span>{dummyTicker.dividend}</span>
        </Data>
        <Data>
          <span>{dummyTicker.yield}</span>
        </Data>
        <Data>
          <span>{dummyTicker.last_trade_time}</span>
        </Data>
      </Item>

      <Item>
        <Data>
          <span>{dummyTicker.ticker}</span>
        </Data>
        <Data>
          <span>{dummyTicker.exchange}</span>
        </Data>
        <Data>
          <span>{dummyTicker.price}</span>
        </Data>
        <Data>
          <span>{dummyTicker.change}</span>
        </Data>
        <Data>
          <span>{dummyTicker.change_percent}</span>
        </Data>
        <Data>
          <span>{dummyTicker.dividend}</span>
        </Data>
        <Data>
          <span>{dummyTicker.yield}</span>
        </Data>
        <Data>
          <span>{dummyTicker.last_trade_time}</span>
        </Data>
      </Item>
    </TickerStyle>
  );
};
