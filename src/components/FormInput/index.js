import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { styles } from './styles'

export default class FormInput extends Component {
    render() {
        const { input, ...inputProps } = this.props
        const { Label } = this.props

        return <TextInput style={styles.input} onChangeText={input.onChange} {...inputProps} />
    }
}