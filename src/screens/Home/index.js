import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Spinner, Button, Book } from '../../components'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { objectToArray } from '../../util'

class Home extends Component {
  constructor(props) {
    super(props)
    
    this.state = { dimension: 0 }

    this.handleTouch = this.handleTouch.bind(this)
  }

  componentWillMount() {
    const { fetchStories } = this.props.screenProps
    
    fetchStories()
  }

  handleTouch() {
    const { clearStory } = this.props.screenProps
    const { navigate } = this.props.navigation
    
    clearStory()
    navigate('CreateStory')
  }

  render() {
    const { props, handleTouch, state } = this
    const { dimension } = state
    const { screenProps } = props
    const { editStory, removeStory } = props.screenProps
    const stories = objectToArray(props.stories.entities)

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Button 
            text={'Write a New Story'} 
            onPress={handleTouch}
            position={'top'} />

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

