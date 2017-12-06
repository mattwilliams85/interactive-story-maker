import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export default class FormInput extends Component {
  render() {
    const { Label } = this.props
    return (
      <View>
        <Text>{ Label }</Text>
        <TextInput style={{ backgroundColor: '#ededed', height: 60 }} value={'Hello'} />
      </View>
    );
  }
}