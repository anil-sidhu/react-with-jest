import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getData } from './redux/action'
import ReduxApp  from './ReduxApp.js'

const mapStateToProps = state => (
  {
    text: state.id

  })
const mapDispatchToProps = dispatch => ({
  getData:() => dispatch(getData())
})

const ReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxApp)

export default ReduxContainer;
