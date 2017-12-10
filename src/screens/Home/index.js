import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import Delete from './Delete'
import { styles } from './styles'

class Home extends Component {
  componentWillMount() {
    const { subscribeStories } = this.props.screenProps

    subscribeStories()
  }

  render() {
    const { props } = this
    const { navigate } = props.navigation
    const { screenProps } = props
    const stories = props.stories

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('CreateGame')}>
          <Text>New Story</Text>
        </TouchableHighlight>

        {stories.map((story, i) =>
          <View key={i}>
            <Text style={styles.title}>{story.title}</Text>
            <Text 
              style={styles.introduction}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {story.introduction}
            </Text>
            <Delete storyId={story._key} {...props} />
            <Text style={styles.introduction}>==============</Text>
          </View>
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

