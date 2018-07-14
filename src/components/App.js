import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import Header from './Header';
import Hero from './Hero';
import Technologies from './Technologies';

const theme = {
  colors: {
    light: '#f7f8fb',
    dark: '#0a1d42',
    primary: '#6d91ff'
  },
  breakpoints: {
    small: '500px',
    medium: '800px'
  }
}

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

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
    <div>
      <Header />
      <Hero />
      <Technologies />
    </div>
  </ThemeProvider>
);

export default App;
