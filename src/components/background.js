import styled from 'styled-components';
import { backgroundCSSGenerator } from '../utils';

export default styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
  ${p => backgroundCSSGenerator(p.background)};
`;
