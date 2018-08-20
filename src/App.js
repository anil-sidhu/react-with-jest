import React, { Component } from 'react';
import CheckBox from './CheckBox.js'
import Network from './Network.js'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  jestCalling(data) {
    this.setState({ data: data })
    return data;
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js.</code> and save to reload..
        </p>
        <p>
          <CheckBox />
          <Network />
          </p>
      </div>
    );
  }
}

export default App;
