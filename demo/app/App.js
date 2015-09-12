'use strict';

import React, { Component } from 'react';
import { Hello } from '../../components/index';

class App extends Component {
  static displayName = 'App';

  render() {
    return (
      <div>
        <h1>Demo</h1>
        <hr />
        <Hello />
        <Hello name="Kitty" />
      </div>
    );
  }
}

export default App;
