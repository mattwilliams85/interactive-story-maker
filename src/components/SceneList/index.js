import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableHighlight, View, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'
import { globalStyles } from '../../styles/global'
import { objectToArray } from '../../util'
import { Link } from '../../components'

class SceneList extends Component {
  handleTouch(key) {
    const { navigate } = this.props.navigation

    navigate('Scene', {sceneKey: key})
  }

  getFirstPassage(scene) {
    if (scene.passages) {
      return objectToArray(scene.passages[0])
    } else {
      return '...'
    }
  }

  render() {
    const { props, getFirstPassage, handleTouch } = this
    const { activeStory } = props
    const scenes = objectToArray(activeStory.scenes)

    return (
      <View style={styles.rowWrap}>
        <FlatList
          data={scenes}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => 
            <TouchableHighlight 
              style={index ? styles.row : [styles.row, styles.firstRow]}
              onPress={handleTouch.bind(this, item._key)}>
              <View style={styles.flexRow}>
                <View style={styles.leftText}>
                  <Text style={globalStyles.h2}>{item.title}</Text>
                  <Text style={globalStyles.subtext}>{getFirstPassage(item)}</Text>
                </View>

                <Feather name={`chevron-right`} size={22} color={'#ccc'} />
              </View>
            </TouchableHighlight>
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