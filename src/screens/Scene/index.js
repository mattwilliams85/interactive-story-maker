import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { FormInput, Button, BrSm } from '../../components'

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.getScene = this.getScene.bind(this)
  }
  
  getScene() {
    const { params } = this.props.navigation.state
    if (params) {
      const { sceneKey } = this.props.navigation.state.params
      return this.props.activeStory.scenes[sceneKey]
    } else {
      return {}
    }
  }

  render() {
    const { submit, props, getScene } = this
    const { handleSubmit } = props
    const scene = getScene()

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Text style={globalStyles.h1}>{scene.title}</Text>

          <BrSm/>

          <Text>Passage</Text>
          <Field
            name='passage'
            placeholder={'Passage text'}
            multiline={true}
            numberOfLines={4}
            height={'50%'}
            component={FormInput} />
          <Button
            text={'Add Choice'}
            position={'bottom'} />
        </View>
      </View>
    )
  }
}

CreateStory = reduxForm({
  form: 'CreateStory',
  enableReinitialize: true,
})(CreateStory)

CreateStory = connect(
  state => ({
    activeStory: state.stories.activeStory,
  }),
)(CreateStory)

export default CreateStory

