import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let ScrollReveal;
if (process.browser) {
  ScrollReveal = require('scrollreveal').default;
}

export default function reveal(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      if (ScrollReveal) {
        const domElement = ReactDOM.findDOMNode(this.component);
        ScrollReveal().reveal(domElement);
      }
    }

    render() {
      return <WrappedComponent ref={c => (this.component = c)} {...this.props} />;
    }
  };
}
