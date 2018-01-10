import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons';

// TODO: DELETE?
export default class Link extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { data, destination, action } = this.props
    const { navigate, dispatch } = this.props.navigation
    const backAction = NavigationActions.back()

    action(data)
    destination === 'back' ? dispatch(backAction) : navigate(destination)
  }

  render() {
    const { handleTouch } = this
    const { icon } = this.props

    return (
      <TouchableHighlight onPress={handleTouch} underlayColor={'#fff'}>
        <Feather name={`${icon}`} size={22} color={'#0dc0c9'}/>
      </TouchableHighlight>
    )
  }
}