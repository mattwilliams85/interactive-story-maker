import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { FormInput, Button } from '../../components'

class CreateStory extends Component {
  render() {
    const { handleSubmit } = this.props
    const { submit } = this

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
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
    initialValues: state.stories.activeStory,
  }),
)(CreateStory)

export default CreateStory

