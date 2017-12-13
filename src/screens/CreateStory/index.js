import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './styles'
import FormInput from '../../components/FormInput'

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
    
    return (
      <View style={styles.container}>

        <Text>Title</Text>
        <Field
          name='title' 
          placeholder={'Story Title'}
          width={300}
          component={FormInput} />

        <Text>Introduction</Text>
        <Field 
          name='introduction'
          multiline={true}
          numberOfLines={4}
          height={'50%'}
          width={300}
          placeholder={'Once upon a time...'}
          component={FormInput} />

        <TouchableOpacity 
          onPress={handleSubmit(submit)}
          style={styles.button}>
          { initialValues ?
            <Text>Update</Text> :
            <Text>Submit</Text>
          }
        </TouchableOpacity>
        
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

