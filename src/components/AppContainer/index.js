import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'
import { Navigation } from '../../config/router'

class AppContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <Navigation screenProps={this.props} />
      </View>
      
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer)
