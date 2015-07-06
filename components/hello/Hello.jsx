'use strict';

const React = require('react');
const css = require('./hello.scss');

class Hello extends React.Component {
  static displayName = 'Hello';

  static propTypes = {
    name: React.PropTypes.string
  };

  static defaultProps = {
    name: 'World'
  };

  render() {
    return (
      <h1 className={ css.hello }>Hello { this.props.name }</h1>
    );
  }
}

module.exports = Hello;
