import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { pressStatus: false }
  }

  onPressIn() {
    this.setState({ pressStatus: true })
  }

  onPressOut() {
    this.setState({ pressStatus: false })
  }

  render() {
    const { text, onPress, position } = this.props
    const { onPressIn, onPressOut } = this

    return (
      <View style={styles[position]}>
        <TouchableWithoutFeedback
          activeOpacity={1}
          onPress={onPress}
          onPressIn={onPressIn.bind(this)}
          onPressOut={onPressOut.bind(this)}
          >
          <View style={this.state.pressStatus ? [styles.buttonPress, styles.button] : styles.button}>
            <Text 
              style={this.state.pressStatus ? [styles.text, styles.textPress] : styles.text}>
              {text}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
