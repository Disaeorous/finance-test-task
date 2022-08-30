import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import { Ticker } from '../components/Stocks';

describe('Ticker component', () => {
  it('Should render the Ticker component', () => {
    const props = {
      ticker: 'FFF',
      exchange: 2,
      price: 2,
      change: 2,
      change_percent: 2,
      dividend: 2,
      yield: 2,
      last_trade_time: 2,
    };

    const tickerComponent = shallow(<Ticker props={props} />);
		expect(tickerComponent).toMatchSnapshot();
  });
});
