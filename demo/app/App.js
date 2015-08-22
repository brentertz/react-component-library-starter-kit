'use strict';

import React, { Component } from 'react';
import Components from '../../components/index';

class App extends Component {
  static displayName = 'App';

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

export default App;
