import styled from 'styled-components';

const Ticker = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1em 1em 1.5em;

  border: 1px solid var(--blue-border);
  border-radius: 0.4em;

  background-color: var(--blue-milk-base);
`;

const Headings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  justify-items: center;
  text-align: center;

  border: 1px solid var(--brown-milk-border);
  border-radius: 0.4em;
  background-color: var(--vintage-base);
`;

const Data = styled.p`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid var(--brown-milk-border);
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

export { Ticker, Item, Headings, Data, Percent };
