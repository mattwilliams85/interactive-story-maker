import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles'

class ImgUploader extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { navigate } = this.props.navigation

    navigate('CameraRoll')
  }

  render() {
    const { handleTouch } = this
    const { activeImg, activeStory } = this.props
    let image = null
    if (activeStory) image = activeStory.coverImg
    if (activeImg) image = activeImg

    return (
      <View>
        <TouchableOpacity onPress={handleTouch}>
          {image ? 
            <View style={styles.imageWrap}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <MaterialIcons name={'photo-camera'} size={30} color={'#fff'} style={styles.icon} />
            </View>
             : 
          <View style={styles.button}>
              <MaterialIcons name={'photo-camera'} size={60} color={'#ccc'} />
          </View>}
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeImg: state.stories.activeImg,
    activeStory: state.stories.activeStory
  }
}

export default connect(mapStateToProps)(ImgUploader)