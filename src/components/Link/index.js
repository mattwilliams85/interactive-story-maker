import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
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
    const { navigate } = this.props.navigation

    action(data)
    navigate(destination)
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