import styled from 'styled-components';
import { media } from '../../../styles/globals/layouts/breakpoints';

const Exchange = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.8em 0.5em 0.8em;

  border: 1px solid var(--blue-border);
  border-radius: 0.4em;

  background-color: var(--blue-milk-base);

  @media screen and ${media.sm} {
    padding: 1em 1em 1.5em;
  }
`;

export { Exchange };
