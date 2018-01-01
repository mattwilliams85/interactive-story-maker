import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Feather } from '@expo/vector-icons';
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
    const { coverImg } = this.props

    return (
      <View>
          <TouchableOpacity onPress={handleTouch}>
            {coverImg ? <Image source={{ uri: coverImg.uri }} style={styles.coverImg} /> : 
            <View style={styles.button}>
              <Feather name={'plus'} size={40} color={'#0dc0c9'} />
            </View>}
          </TouchableOpacity>
        
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    coverImg: state.stories.activeImg,
  }
}

export default connect(mapStateToProps)(ImgUploader)