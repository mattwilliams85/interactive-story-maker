import React, { Component } from 'react'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import { styles } from './styles'

export default class FormTextArea extends Component {
  render() {
    const { input, ...inputProps } = this.props

    return <AutoGrowingTextInput style={styles.textArea} {...inputProps} {...input} />
  }
}