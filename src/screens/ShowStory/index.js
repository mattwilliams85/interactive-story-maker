import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight } from 'react-native'
import Button from '../../components/Button'
import { globalStyles } from '../../styles/global'

class ShowStory extends Component {
  constructor(props) {
    super(props)
  }

  handleTouch() {

  }

  render() {
    const { title, introduction } = this.props.activeStory

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>

          <View style={globalStyles.center}>
            <Text style={globalStyles.h1}>{title}</Text>
          </View>
          <Text>{introduction}</Text>

          <Button 
            text={'Start a New Scene'} 
            position={'bottom'}/>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeStory: state.stories.activeStory,
  }
}

export default connect(mapStateToProps)(ShowStory)

