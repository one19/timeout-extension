import { h, render } from 'preact';
import { injectGlobal } from 'styled-components';
import App from './components/app';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    border: none;
  }
`;

render(<App />, document.querySelector('main'));
