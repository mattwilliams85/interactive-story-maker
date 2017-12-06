import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles'
import FormInput from '../../components/FormInput';

class CreateGame extends Component {  
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('click')
  }

  render() {
    const { props, handleSubmit } = this
    const { navigate } = props.navigation
    
    return (
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput 
          style={styles.input}
          placeholder={'Story Title'}
        />
        <Text>Introduction</Text>
        <TextInput 
          style={[styles.input, styles.textArea]}
          multiline={true}
          numberOfLines={4}
          placeholder={'Once upon a time...'} />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({ form: 'createGame' })(CreateGame);

