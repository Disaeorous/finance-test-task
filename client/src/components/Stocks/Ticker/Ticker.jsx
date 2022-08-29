import { Ticker as TickerItem, Data, Percent, StockSymbol } from './tickerStyles';
import { screenSize } from '../../../styles/globals/layouts/breakpoints';
import { formatCurrency, formatDate } from '../../../utils';
import { useWindowSize } from '../../../hooks/useWindowSize';

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

  const [width, height] = useWindowSize();
  const { xs, md, df, lg } = screenSize;

  return (
    <TickerItem>
      <Data>
        <StockSymbol style={{ width: 'calc(100% - 1.8rem)' }}>{ticker}</StockSymbol>
      </Data>

      <Data width={width} size={md}>
        <span>{exchange}</span>
      </Data>

      <Data width={width} size={xs}>
        <span style={{ fontWeight: 'var(--fw-700)' }}>{formatCurrency(price)}</span>
      </Data>

      <Data>
        <span style={{ color: 'var(--green-border)' }}>{change}</span>
      </Data>

      <Data>
        <Percent style={{ width: 'auto', maxWidth: '9.5rem' }}>
          {`${changePercent}%`}
        </Percent>
      </Data>

      <Data width={width} size={df}>
        <span>{dividend}</span>
      </Data>

      <Data width={width} size={df}>
        <span>{stockYield}</span>
      </Data>

      <Data width={width} size={lg}>
        <span>{formatDate(new Date(lastTrade))}</span>
      </Data>
    </TickerItem>
  );
};
