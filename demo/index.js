'use strict';

import React from 'react';
import App from './app/App';
require('./index.html');

(() => {
  if (!window.React) {
    window.React = React; // Global needed for React dev tools
  }

  React.render(<App />, document.getElementById('app'));
})();
