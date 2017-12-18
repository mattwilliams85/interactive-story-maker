import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableHighlight, View, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'
import { globalStyles } from '../../styles/global'
import { objectToArray } from '../../util'
import { Link } from '../../components'

class SceneList extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { navigate } = this.props.navigation

    navigate('Scene')
  }

  getFirstPassage(scene) {
    if (scene.passages) {
      return objectToArray(scene.passages[0])
    } else {
      return '...'
    }
  }

  render() {
    const { props, getFirstPassage } = this
    const { activeStory } = props
    const scenes = objectToArray(activeStory.scenes)

    return (
      <View style={styles.rowWrap}>
        <FlatList
          data={scenes}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => 
            <View style={ index ? styles.row : [styles.row, styles.firstRow]}>
              <Text style={globalStyles.h2}>{item.title}</Text>
              <Feather name={`chevron-right`} size={22} color={'#ccc'} />
            </View>
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