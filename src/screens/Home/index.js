import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import Delete from './Delete'
import Edit from './Edit'
import Spinner from '../../components/Spinner'
import { styles } from './styles'

class Home extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  componentWillMount() {
    const { fetchStories } = this.props.screenProps
    
    fetchStories()
  }

  handleTouch() {
    const { clearStory } = this.props.screenProps
    const { navigate } = this.props.navigation
    
    navigate('CreateGame')
    clearStory()
  }

  render() {
    const { props, handleTouch } = this
    const { screenProps } = props
    const stories = props.stories.entities

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={handleTouch}>
          <Text>New Story</Text>
        </TouchableHighlight>

        <Spinner/>

        {stories.map((story, i) =>
          <View key={i} style={styles.card}>
            <Text style={styles.title}>{story.title}</Text>
            <Text 
              style={styles.introduction}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {story.introduction}
            </Text>
            <View style={styles.options}>
              <Edit story={story} {...props} />
              <Delete storyId={story._key} {...props} />
            </View> 
        
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

