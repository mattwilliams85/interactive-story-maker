import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { AppRegistry, StatusBar } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import AppContainer from './src/components/AppContainer'
import reducer from './src/reducers'



function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('textadventure', () => App)
