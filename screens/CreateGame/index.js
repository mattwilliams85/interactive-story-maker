import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from './styles'

export default class CreateGame extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Why hello there ;)</Text>
        <Button
          title='Go Forward'
          onPress={() =>
            navigate('Home')
          }
        />
      </View>
    )
  }
}

