const React = require('react');

const App = require('./app/App');
require('./index.html');

(() => {
  if (!window.React) {
    window.React = React; // Global needed for React dev tools
  }

  /* jshint ignore:start */
  React.render(<App />, document.getElementById('app'));
  /* jshint ignore:end */
})();
