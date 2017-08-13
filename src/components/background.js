import styled from 'styled-components';
import { backgroundCSSGenerator } from '../utils';

export default styled.div`
  display: box;
  box-sizing: content-box;
  margin: 0;
  padding: 0 10px;
  border: none;
  ${p => backgroundCSSGenerator(p.background)};
`;
