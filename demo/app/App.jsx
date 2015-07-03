'use strict';

const React = require('react');
const Components = require('../../components/index');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <hr />
        <Components.Hello />
        <Components.Hello name="Kitty" />
      </div>
    );
  }
}

module.exports = App;
