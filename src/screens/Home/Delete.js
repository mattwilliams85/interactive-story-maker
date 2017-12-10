import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { styles } from './styles'

export default class Delete extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { removeStory } = this.props.screenProps
    const { storyId } = this.props
    
    removeStory(storyId)
  }

  render() {
    const { handleTouch } = this

    return (
      <TouchableHighlight onPress={handleTouch}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableHighlight>
    )
  }
}