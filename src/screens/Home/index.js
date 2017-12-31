import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import { Spinner, Button, Link } from '../../components'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { objectToArray } from '../../util'

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
    
    navigate('CreateStory')
    clearStory()
  }

  render() {
    const { props, handleTouch } = this
    const { screenProps } = props
    const { editStory, removeStory } = props.screenProps
    const stories = objectToArray(props.stories.entities)

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Button 
            text={'New Story'} 
            onPress={handleTouch}
            position={'top'} />

          <Spinner/>

          {stories.map((story, i) =>
            <View key={i} style={globalStyles.card}>
              <Text style={styles.title}>{story.title}</Text>
              <View style={styles.options}>
                <Link 
                  icon={'eye'} 
                  data={story} 
                  action={editStory} 
                  destination={'Story'}
                  {...props}/>
                <Link 
                  icon={'edit'} 
                  data={story} 
                  action={editStory} 
                  destination={'CreateStory'}
                  {...props}/>
                <Link 
                  icon={'trash'} 
                  data={story._key} 
                  action={removeStory} 
                  {...props}/>
              </View> 
          
            </View>
          )}
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

