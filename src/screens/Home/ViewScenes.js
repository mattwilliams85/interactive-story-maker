import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { styles } from './styles'

export default class ViewScenes extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { editStory } = this.props.screenProps
    const { story } = this.props
    const { navigate } = this.props.navigation

    navigate('StoryScenes')
  }


  render() {
    const { handleTouch } = this

    return (
      <TouchableHighlight onPress={handleTouch}>
        <Text style={styles.option}>VIEW</Text>
      </TouchableHighlight>
    )
  }
}