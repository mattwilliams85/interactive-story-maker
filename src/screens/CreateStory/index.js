import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { FormInput, Button } from '../../components'

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    const { initialValues } = this.props
    const { navigate } = this.props.navigation
    const { createStory, updateStory } = this.props.screenProps

    initialValues ? updateStory(data) : createStory(data)
    navigate('Home')
  }

  render() {
    const { handleSubmit, initialValues } = this.props
    const { navigate } = this.props.navigation
    const { submit } = this
    const buttonText = initialValues ? 'Update' : 'Submit'
    
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Text>Title</Text>
          <Field
            name='title' 
            placeholder={'Story Title'}
            component={FormInput} />

          <Text>Introduction</Text>
          <Field 
            name='introduction'
            multiline={true}
            numberOfLines={4}
            height={'50%'}
            placeholder={'Once upon a time...'}
            component={FormInput} />

          <Button 
            text={buttonText}
            onPress={handleSubmit(submit)}
            position={'bottom'}/>
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
    initialValues: state.stories.activeStory,
  }),
)(CreateStory)

export default CreateStory

