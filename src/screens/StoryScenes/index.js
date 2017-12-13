import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'

class StoryScenes extends Component {
  constructor(props) {
    super(props)
  }

  handleTouch() {

  }

  render() {

    return (
      <View>

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeStory: state.stories.activeStory,
  }
}

export default connect(mapStateToProps)(StoryScenes)

