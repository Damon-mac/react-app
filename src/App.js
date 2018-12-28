import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" size="small" inline>small</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
