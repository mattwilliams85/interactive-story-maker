import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { SceneList, Button } from '../../components'
import { globalStyles } from '../../styles/global'

class ListScenes extends Component {
  // constructor(props) {
  //   super(props)

  //   this.handleTouch = this.handleTouch.bind(this)
  // }

  static navigationOptions = ({ navigation, screenProps }) => {
    const { navigate } = navigation
    const headerRight =
      <TouchableHighlight>
        <Feather
          onPress={onPress}
          name={'file-plus'}
          size={20} color={'#fff'}
          style={{ paddingRight: 15 }} />
      </TouchableHighlight>

    function onPress() {
      const { createScene } = screenProps

      createScene()
      navigate('Scene')
    }

    return { headerRight }
  }

  render() {
    const { handleTouch, props } = this
    const { story } = props

    return (
      <View style={globalStyles.container}>
        <SceneList {...props} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeStory: state.stories.activeStory,
  }
}

export default connect(mapStateToProps)(ListScenes)

