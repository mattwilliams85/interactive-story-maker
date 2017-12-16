import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'

export default class Button extends Component {
  render() {
    const { text, onPress, position } = this.props
    return (
      <View style={[styles.buttonWrap, styles[position]]}>
        <TouchableHighlight onPress={onPress}>
          <Text style={styles.button}>{text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
