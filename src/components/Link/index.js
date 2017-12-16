import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { styles } from './styles'

export default class Link extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { data, destination, action } = this.props
    const { navigate } = this.props.navigation

    action(data)
    navigate(destination)
  }

  render() {
    const { handleTouch } = this
    const { text } = this.props

    return (
      <TouchableHighlight onPress={handleTouch}>
        <Text style={styles.link}>{text}</Text>
      </TouchableHighlight>
    )
  }
}