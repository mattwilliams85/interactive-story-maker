import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableHighlight } from 'react-native'
import { Button, FormInput } from '../../components/'
import { globalStyles } from '../../styles/global'

class ShowStory extends Component {
  constructor(props) {
    super(props)

    this.handleTouch = this.handleTouch.bind(this)
  }

  handleTouch() {
    const { navigate } = this.props.navigation

    navigate('Scene')
  }

  render() {
    const { handleTouch } = this
    const { title, introduction } = this.props.activeStory

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>

          <View style={globalStyles.center}>
            <Text style={globalStyles.h1}>{title}</Text>
          </View>
          <Text style={globalStyles.p}>{introduction}</Text>

          <Text>{"\n"}</Text>

          <Field
            name='scene'
            placeholder={'Scene Title'}
            component={FormInput} />
          <Button 
            text={'Start a New Scene'} 
            onPress={handleTouch}/>
        </View>
      </View>
    )
  }
}

ShowStory = reduxForm({
  form: 'CreateScene',
  enableReinitialize: true,
})(ShowStory)

ShowStory = connect(
  state => ({
    activeStory: state.stories.activeStory,
  }),
)(ShowStory)

export default ShowStory

