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
      /* jshint ignore:start */
      <h1 className="hello">Hello { this.props.name }</h1>
      /* jshint ignore:end */
    );
  }
});

module.exports = Hello;
