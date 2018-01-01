import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import CameraRollPicker from 'react-native-camera-roll-picker'

export default class CameraRoll extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch(response) {
    const backAction = NavigationActions.back()
    const { uploadImg } = this.props.screenProps

    uploadImg(response[0])
    this.props.navigation.dispatch(backAction)
  }

  render() {
    const { handleTouch } = this
    return (
      <CameraRollPicker 
        callback={handleTouch} 
        maximum={1}
        selectSingleItem={true} />
    )
  }
}

