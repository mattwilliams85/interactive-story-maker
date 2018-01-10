import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Text, View, TouchableOpacity, ImageStore } from 'react-native'
import { connect } from 'react-redux'
import { RNS3 } from 'react-native-aws3'
import { globalStyles } from '../../styles/global'
import { FormInput, Button, Br, ImgUploader } from '../../components'
import { s3options } from '../../config/s3Settings'
import { NavigationActions } from 'react-navigation'

let isValid = null

class CreateStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.submit = this.submit.bind(this)
  }

  static navigationOptions = ({ navigation, screenProps }) => {
    const { params }  = navigation.state
    let headerTitle = 'Story Settings'

    if (params && params.headerTitle) headerTitle = 'New Story'
    return { headerTitle }
  }

  toggleIsLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  submit(data) {
    const { initialValues, coverImg } = this.props
    const { navigate, dispatch } = this.props.navigation
    const { createStory, updateStory, clearStory } = this.props.screenProps
    const backAction = NavigationActions.back()
    let image = null
    if (initialValues && initialValues.coverImg) image = initialValues.coverImg
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
        dispatch(backAction)
      }
    })
  }

  render() {
    const { handleSubmit, initialValues, navigation, screenProps } = this.props
    const { submit } = this
    const { isLoading } = this.state
    const buttonText = initialValues ? 'Update' : 'Submit'
    const isValid = value => false

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.section}>
          <Text>Title</Text>
          <Field
            name='title' 
            placeholder={'Story Title'}
            component={FormInput} 
            validate={isValid} />
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
  validate: (values, props) => {
    console.log(props.initialValues)
    if (props.initialValues) { 
      values = props.initialValues 
    } else {
      values.coverImg = props.coverImg
    }
    const errors = {}

    if (!values.title) errors.title = 'Title is required.'
    if (!values.author) errors.author = 'Author is required.'
    if (!values.coverImg) errors.coverImg = 'Cover Image is required.'
    if (!values.introduction) errors.introduction = 'Introduction is required.'
    console.log(errors)
    return errors
  }
})(CreateStory)

CreateStory = connect(
  state => ({
    initialValues: state.stories.activeStory,
    coverImg: state.stories.activeImg,
  }),
)(CreateStory)

export default CreateStory