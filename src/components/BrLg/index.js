import React, { Component } from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

export default class BrLg extends Component {
  render() {
    const { text, onPress, position } = this.props
    return (
      <Text>{'\n'}</Text>
    )
  }
}
