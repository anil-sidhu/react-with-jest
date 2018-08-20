import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getData } from './redux/action'



class ReduxApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }

  
  }
  async jestCalling(data) {
    this.setState({ data: data })
    await this.props.getData()
    return this.props.text;
  }
  render() {
    console.warn("text",this.props.text)
    return (
      <div className="App">
        
      redux test page
      </div>
    );
  }
}





export default ReduxApp;
