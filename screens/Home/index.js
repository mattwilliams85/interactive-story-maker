import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { styles } from './styles'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation
    const { screenProps } = this.props
    const stories = this.props.stories

    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() =>
          navigate('CreateGame')}>
          New Game
        </Text>

        {stories.map((story, i) =>
          <Text 
            key={i}>
            {story.title}
          </Text>
        )}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    storiesCount: state.storiesCount,
    stories: state.stories,
  }
}

export default connect(mapStateToProps)(Home)

