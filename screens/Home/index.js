import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

class Home extends Component {
  render() {
    const navigate = this.props.navigation
    const screenProps = this.props.screenProps
    const { storiesCount } = this.props

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556c84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 10,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#d6d7da',
  }
});
