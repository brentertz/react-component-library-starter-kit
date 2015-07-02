'use strict';

const React = require('react');
require('./hello.scss');

const Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'World'
    };
  },

  render() {
    return (
      <h1 className="hello">Hello { this.props.name }</h1>
    );
  }
});

module.exports = Hello;
