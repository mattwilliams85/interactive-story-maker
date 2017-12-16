import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { FormInput, Button } from '../../components'

class CreateScene extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    const { initialValues } = this.props
    const { navigate } = this.props.navigation
    const { CreateScene, updateStory } = this.props.screenProps

    initialValues ? updateStory(data) : createScene(data)
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
            position={'bottom'} />
        </View>
      </View>
    )
  }
}

CreateScene = reduxForm({
  form: 'CreateScene',
  enableReinitialize: true,
})(CreateScene)

CreateScene = connect(
  state => ({
    initialValues: state.stories.activeStory,
  }),
)(CreateScene)

export default CreateScene

