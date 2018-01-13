import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import Swipeout from 'react-native-swipeout'
import { styles } from './styles'
import { globalStyles } from '../../styles/global'
import { objectToArray } from '../../util'
import { Link } from '../../components'

class SceneList extends Component {
  handleTouch(scene) {
    const { navigate } = this.props.navigation
    const { selectScene } = this.props.screenProps
    
    selectScene(scene)
    navigate('Scene')
  }
  
  getFirstPassage(scene) {
    if (scene.passages) {
      return objectToArray(scene.passages[0])
    } else {
      return 'Once upon a time...'
    }
  }

  render() {
    const { props, getFirstPassage, handleTouch, handleDelete } = this
    const { activeStory } = props
    const scenes = objectToArray(activeStory.scenes)
    const { removeScene } = this.props.screenProps
    
    return (
      <View style={styles.rowWrap}>
        <FlatList
          data={scenes}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => 
            // TODO: Find better swipe library
            <Swipeout autoClose={true} right={[
              {
                text: 'Trash',
                backgroundColor: 'red',
               
                onPress: () => {
                  removeScene(item._key)
                }
              }
            ]}>
              <TouchableWithoutFeedback 
                onPress={handleTouch.bind(this, item)}>
                <View style={styles.row}>
                  <View style={styles.leftText}>
                    <Text style={globalStyles.h2}>{item.title}</Text>
                    <Text style={globalStyles.subtext}>{getFirstPassage(item)}</Text>
                  </View>

                </View>
              </TouchableWithoutFeedback>
            </Swipeout>
          }         
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeStory: state.stories.activeStory
  }
}

export default connect(mapStateToProps)(SceneList)