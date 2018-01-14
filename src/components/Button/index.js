import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, ActivityIndicator } from 'react-native'
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
    const { text, onPress, position, isLoading } = this.props
    const { pressStatus } = this.state
    const { onPressIn, onPressOut } = this

    return (
      <View style={styles[position]}>
        <TouchableWithoutFeedback
          activeOpacity={1}
          onPress={onPress}
          onPressIn={onPressIn.bind(this)}
          onPressOut={onPressOut.bind(this)}
          >
          { isLoading ? 
            <View style={[styles.button, styles.buttonDisabled]}>
              <ActivityIndicator
                animating={isLoading}
                size="small"
                color="#fff" />
            </View>
            :
            <View style={pressStatus ? [styles.buttonPress, styles.button] : styles.button}>
              <Text
                style={pressStatus ? [styles.text, styles.textPress] : styles.text}>
                {text}
              </Text>
            </View>
          }
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
