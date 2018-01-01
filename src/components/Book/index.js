import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default class Book extends Component {
  render() {
    const { story } = this.props
    return (
      <View>
        <Text>{ story.title }</Text>
        <Text>{ story.author }</Text>
      </View>
    )
  }
}
