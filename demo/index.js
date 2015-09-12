'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
require('./index.html');

(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
})();
