import styled from 'styled-components';

const Ticker = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  justify-items: center;
  text-align: center;

  border-right: 1px solid var(--brown-milk-border);
  border-left: 1px solid var(--brown-milk-border);
  border-top: 1px solid var(--brown-milk-border);
  border-right-color: transparent;
  border-left-color: transparent;

  transition: background-color 0.15s ease-out, border-color 0.5s ease-in-out,
    border-radius 0.25s ease-out;

  &:last-child {
    border-bottom: 1px solid var(--gray-border);
  }

  &:hover {
    background-color: var(--vintage-base);

    border-top-color: var(--brown-milk-border);
    border-right-color: var(--brown-milk-border);
    border-left-color: var(--brown-milk-border);
    border-top-right-radius: 0.4em;
    border-top-left-radius: 0.4em;
  }
`;

const Heading = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-bottom: 1.5rem;

  background-color: var(--white-bg);
  color: var(--gray-dop);
  border-radius: 0.4em;

  & > span {
    padding: 0.4em;
  }
`;

const Data = styled.p`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4em;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid var(--gray-border);
  }

  & > span {
    width: 100%;
    cursor: pointer;
  }
`;

const Percent = styled.span`
  // Grow up
  // --green-l: 85%;
  // --green-base: hsl(var(--green-h), var(--green-s), var(--green-l));
  // background-color: var(--green-base);
  // border: 1px solid var(--green-dop);

  // Dump IT!!!
  --red-l: 85%;
  --red-border: hsl(0, 73%, 65%);
  --red-base: hsl(var(--red-h), var(--red-s), var(--red-l));
  background-color: var(--red-base);
  border: 1px solid var(--red-border);
  border-radius: 0.2em;
  position: relative;

  text-align: right;
  padding: 0 0.8rem 0 2.4rem;

  &::after {
    content: '\\1F845'; //up arrow
    // content: '\\1F847'; //down arrow
    position: absolute;
    top: 50%;
    left: 0.3rem;
    transform: translateY(-50%);
  }
`;

const StockSymbol = styled.span`
  background-color: var(--white-base);
  border: 1px solid var(--blue-border);
  border-radius: 0.2em;

  max-width: calc(100% - 0.8rem);
  padding: 0.2em 0.4em;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { Ticker, Heading, Data, Percent, StockSymbol };
