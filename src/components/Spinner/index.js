import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles'

class Spinner extends Component {
  render() {
    const { isLoading } = this.props

    return (
      isLoading ?
      <View style={styles.spinnerWrap}>
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

