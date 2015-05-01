'use strict';

var React = require('react');
var Components = require('../../components/index');

var App = React.createClass({
  displayName: 'App',

  render() {
    return (
      /* jshint ignore:start */
      <div>
        <h1>Demo</h1>
        <hr />
        <Components.Hello />
        <Components.Hello name="Kitty" />
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = App;
