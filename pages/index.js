import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import ContactForm from './../components/ContactForm';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Projects from './../components/Projects';
import Services from './../components/Services';
import Skills from './../components/Skills';
import Technologies from './../components/Technologies';

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-120978536-2');
  ReactGA.pageview('/');
}

const theme = {
  colors: {
    light: '#f7f8fb',
    dark: '#0a1d42',
    primary: '#6d91ff',
    border: 'rgba(10, 29, 66, 0.06)'
  },
  breakpoints: {
    small: '600px',
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

class Index extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <ContactForm ref={(ref) => this.contactForm = ref} />
          <Header showContactForm={() => this.contactForm.showContactForm()} />
          <Hero showContactForm={() => this.contactForm.showContactForm()} />
          <Technologies />
          <Services />
          <Projects />
          <Skills />
        </div>
      </ThemeProvider>
    )
  }
}

export default Index;
