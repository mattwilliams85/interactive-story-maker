import React, { Component } from 'react'
import { reduxForm, Field, change } from 'redux-form'
import { Text, View, TouchableOpacity, ImageStore } from 'react-native'
import { connect } from 'react-redux'
import { globalStyles } from '../../styles/global'
import { FormInput, Button, BrSm, ImgUploader } from '../../components'

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    const { initialValues, dispatch, coverImg } = this.props
    const { navigate } = this.props.navigation
    const { createStory, updateStory } = this.props.screenProps
  
    dispatch(change('CreateStory', 'coverImg', coverImg))
    initialValues ? updateStory(data) : createStory(data)
    
    navigate('Home')
  }

  render() {
    const { handleSubmit, initialValues, navigation, screenProps } = this.props
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
          <BrSm/>

          <Text>Author</Text>
          <Field
            name='author'
            placeholder={'Author'}
            component={FormInput} />
          <BrSm />

          <Text>Cover Image</Text>
          <Field
            name='coverImg'
            component={ImgUploader} 
            props={{ navigation, screenProps}} />
          <BrSm />

          <Text>Introduction</Text>
          <Field 
            name='introduction'
            multiline={true}
            numberOfLines={4}
            height={'30%'}
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
    coverImg: state.stories.activeImg,
  }),
)(CreateStory)

export default CreateStory