import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles'
import FormInput from '../../components/FormInput';

class CreateGame extends Component {  
  render() {
    const { handleSubmit } = this.props
    const { navigate } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text>Title</Text>
        <Field
          name='title' 
          placeholder={'Story Title'}
          component={FormInput} />
        <Text>Introduction</Text>
        <Field 
          name='Introduction'
          multiline={true}
          numberOfLines={4}
          placeholder={'Once upon a time...'}
          component={FormInput} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({ form: 'createGame' })(CreateGame);

