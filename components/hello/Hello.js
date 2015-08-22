'use strict';

import React, { Component, PropTypes } from 'react';
require('./hello.scss');

class Hello extends Component {
  static displayName = 'Hello';

  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: 'World'
  };

  render() {
    return (
      <h1 className="hello">Hello { this.props.name }</h1>
    );
  }
}

export default Hello;
