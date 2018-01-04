import React, { Component } from 'react'
import { View } from 'react-native'

export default class Br extends Component {
  render() {
    const size = this.props.size || 10
    let { horz } = this.props
  
    return (
      <View style={horz ? {width: size} : {height: size}}/>
    )
  }
}
