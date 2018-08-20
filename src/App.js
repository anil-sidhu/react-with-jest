import React, { Component } from 'react';
import CheckBox from './CheckBox.js'
import Network from './Network.js'
import { connect } from 'react-redux'
import { getData } from './redux/action'
import ReduxContainer from './Container';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }

  
  }
  async jestCalling(data) {
    this.setState({ data: data })
   
    return 20;
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
          <ReduxContainer />
        </p>
      </div>
    );
  }
}





export default App;
