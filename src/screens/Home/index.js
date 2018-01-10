import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Spinner, Button, Book } from '../../components'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { objectToArray } from '../../util'

class Home extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { navigate } = navigation
    const headerRight =
      <TouchableHighlight>
        <Feather
          onPress={onPress}
          name={'feather'}
          size={20} color={'#fff'}
          style={{ paddingRight: 15 }} />
      </TouchableHighlight>

    function onPress() {
      const { clearStory } = screenProps

      clearStory()
      navigate('CreateStory', {headerTitle: 'New Story'})
    }

    return { headerRight }
  }

  componentWillMount() {
    const { fetchStories } = this.props.screenProps
    
    fetchStories()
  }

  render() {
    const { props, handleTouch, state } = this
    const { screenProps } = props
    const { editStory, removeStory } = props.screenProps
    const stories = objectToArray(props.stories.entities)

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>

          <Spinner/>

          <View style={styles.coverWrap}>
            {stories.map((story, i) =>
              <Book {...props} story={story} key={i}/>
            )}
          </View>
        </View>
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

