import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableHighlight } from 'react-native'
import { Button, FormInput, BrLg, BrSm, SceneList } from '../../components/'
import { globalStyles } from '../../styles/global'

class Story extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    const { navigate } = this.props.navigation
    const { createScene } = this.props.screenProps
    const storyId = this.props.activeStory._key

    createScene(data, storyId)
    navigate('Scene')
  }

  render() {
    const { handleTouch, submit, props } = this
    const { handleSubmit, activeStory } = props
    const { title, introduction, scenes } = activeStory

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>

          <View style={globalStyles.center}>
            <Text style={globalStyles.h1}>{title}</Text>
          </View>
          <Text style={globalStyles.p}>{introduction}</Text>

          <BrLg/>

          <Field
            name='title'
            placeholder={'Scene Title'}
            component={FormInput} />
          <BrSm/>
          <Button 
            text={'Start a New Scene'} 
            onPress={handleSubmit(submit)}
            position={'top'}/>

            <SceneList scenes={scenes} {...props}/>
        </View>
      </View>
    )
  }
}

Story = reduxForm({
  form: 'CreateScene',
  enableReinitialize: true,
})(Story)

Story = connect(
  state => ({
    activeStory: state.stories.activeStory
  }),
)(Story)

export default Story

