import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles'
import FormInput from '../../components/FormInput';

class CreateGame extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }  

  submit(data) {
    const { navigate } = this.props.navigation
    this.props.screenProps.createStory(data)
    navigate('Home')
  }

  render() {
    const { handleSubmit } = this.props
    const { navigate } = this.props.navigation
    const { submit } = this
    
    return (
      <View style={styles.container}>
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
          placeholder={'Once upon a time...'}
          component={FormInput} />
        <TouchableOpacity onPress={handleSubmit(submit)}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({
  form: 'createGame'
})(CreateGame)


