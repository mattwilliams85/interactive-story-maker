import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { styles } from './styles'

class Home extends Component {
  render() {
    const { props } = this
    const { navigate } = props.navigation
    const { screenProps } = props
    const { storiesCount } = props

    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() =>
          navigate('CreateGame', { name: 'Jane' })}>
          New Game
        </Text>

        <Text style={{marginTop: 20}}>
          Story Count: { storiesCount }
        </Text>
        <TouchableHighlight onPress={() => { screenProps.addStory() }}>
          <Text>Add Story</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    storiesCount: state.storiesCount,
  }
}

export default connect(mapStateToProps)(Home)

