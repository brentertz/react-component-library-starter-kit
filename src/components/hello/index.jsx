'use strict';

var React = require('react');
require('./styles.scss');

var Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name: 'World'
    };
  },

  render: function() {
    return (
      /* jshint ignore:start */
      <h1 className="hello">Hello {this.props.name}</h1>
      /* jshint ignore:end */
    );
  }
});

module.exports = Hello;
