import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import Hero from './Hero';

const theme = {
  colors: {
    light: '#f7f8fb',
    dark: '#0a1d42',
    primary: '#6d91ff'
  }
}

injectGlobal`
  body {
    background: #f7f8fb;
    font-family: Lato;
    font-size: 18px;
    color: ${theme.colors.dark};
    overflow-x: hidden;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Hero />
  </ThemeProvider>
);

export default App;
