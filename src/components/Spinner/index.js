import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'

class Spinner extends Component {
  render() {
    const { isLoading } = this.props

    return (
      isLoading ?
      <View>
        <ActivityIndicator 
          animating={isLoading} 
          size="large" 
          color="#0dc0c9" />
      </View> : null
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.stories.isLoading,
  }
}

export default connect(mapStateToProps)(Spinner)

