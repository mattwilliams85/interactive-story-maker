import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { FormInput, Button, Br } from '../../components'

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.getScene = this.getScene.bind(this)
    this.submit = this.submit.bind(this)
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

  submit(data) {
    const { createPassage } = this.props.screenProps
    const storyId = this.props.activeStory._key
    const sceneId = this.props.navigation.state.params.sceneKey

    createPassage(data, storyId, sceneId)
  }

  render() {
    const { submit, props, getScene } = this
    const { handleSubmit } = props
    const scene = getScene()

    return (
      <View style={globalStyles.container}>
        <View style={styles.section}>
          <Br />
          
          <Text style={globalStyles.h1}>{this.props.activeScene.title}</Text>

          <Br/>
          <Field
            name='passage'
            placeholder={'Passage text'}
            multiline={true}
            numberOfLines={4}
            height={'50%'}
            component={FormInput} />
          <Button
            text={'Add Passage'}
            position={'bottom'}
            onPress={handleSubmit(submit)}/>
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
    activeScene: state.scenes.activeScene,
  }),
)(CreateStory)

export default CreateStory

