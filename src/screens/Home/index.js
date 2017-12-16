import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import { Spinner, Button, Link } from '../../components'
import { globalStyles } from '../../styles/global'
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
    
    navigate('CreateStory')
    clearStory()
  }

  render() {
    const { props, handleTouch } = this
    const { screenProps } = props
    const { editStory, removeStory } = props.screenProps
    const stories = props.stories.entities

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Button 
            text={'New Story'} 
            onPress={handleTouch}
            position={'top'} />

          <Spinner/>

          {stories.map((story, i) =>
            <View key={i} style={styles.card}>
              <Text style={styles.title}>{story.title}</Text>
              {/* <Text 
                style={styles.introduction}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {story.introduction}
              </Text> */}
              <View style={styles.options}>
                <Link 
                  text={'VIEW'} 
                  data={story} 
                  action={editStory} 
                  destination={'ShowStory'}
                  {...props}/>
                <Link 
                  text={'EDIT'} 
                  data={story} 
                  action={editStory} 
                  destination={'CreateStory'}
                  {...props}/>
                <Link 
                  text={'REMOVE'} 
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

