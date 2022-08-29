import { Heading, Span } from './tickerStyles';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { screenSize } from '../../../styles/globals/layouts/breakpoints';

export const Headings = () => {
  const [width, height] = useWindowSize();
  const { xs, md, df, lg } = screenSize;

  return (
    <Heading>
      <Span>Ticker</Span>
      <Span width={width} size={md}>
        Exchange
      </Span>

      <Span width={width} size={xs}>
        Price
      </Span>

      <Span>Change</Span>
      <Span>Change percent</Span>

      <Span width={width} size={df}>
        Dividend
      </Span>

      <Span width={width} size={df}>
        Yield
      </Span>

      <Span width={width} size={lg}>
        Last trade time
      </Span>
    </Heading>
  );
};
