import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export default class BrSm extends Component {
  render() {
    const { text, onPress, position } = this.props
    return (
      <View style={styles.break}/>
    )
  }
}
