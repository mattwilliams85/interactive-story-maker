import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity, ImageStore } from 'react-native'
import { connect } from 'react-redux'
import { RNS3 } from 'react-native-aws3'
import { globalStyles } from '../../styles/global'
import { FormInput, Button, Br, ImgUploader } from '../../components'
import { s3options } from '../../config/s3Settings'
import { NavigationActions } from 'react-navigation'

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.submit = this.submit.bind(this)
  }

  toggleIsLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  submit(data) {
    const { initialValues, dispatch, coverImg } = this.props
    const { navigate } = this.props.navigation
    const { createStory, updateStory, clearStory } = this.props.screenProps
    const backAction = NavigationActions.back()
    let image = null
    if (initialValues.coverImg) image = initialValues.coverImg
    if (coverImg) image = coverImg
    
    // TODO: Refactor into separate async function
    const file = {
      uri: image.uri,
      name: image.filename,
      type: "image/png"
    }

    this.toggleIsLoading()  

    RNS3.put(file, s3options).then(response => {
      if (response.status !== 201) {
        throw new Error("Failed to upload image to S3");
      } else {
        data.coverImg = { 
          uri: response.body.postResponse.location ,
          filename: file.name
        }

        this.toggleIsLoading()
        initialValues ? updateStory(data) : createStory(data)
        this.props.navigation.dispatch(backAction)


      }
    })
  }

  render() {
    const { handleSubmit, initialValues, navigation, screenProps } = this.props
    const { submit } = this
    const { isLoading } = this.state
    const buttonText = initialValues ? 'Update' : 'Submit'

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Text>Title</Text>
          <Field
            name='title' 
            placeholder={'Story Title'}
            component={FormInput} />
          <Br/>

          <Text>Author</Text>
          <Field
            name='author'
            placeholder={'Author'}
            component={FormInput} />
          <Br />

          <Text>Cover Image</Text>
          <Field
            name='coverImg'
            component={ImgUploader} 
            props={{ navigation, screenProps}} />
          <Br />

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
            position={'bottom'}
            loadState={isLoading}/>
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