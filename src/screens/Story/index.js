import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Text, View, ScrollView, TouchableHighlight, Image } from 'react-native'
import { Button, FormInput, Br, SceneList } from '../../components/'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

class Story extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.handleTouch = this.handleTouch.bind(this)
  }

  submit(data) {
    const { navigate } = this.props.navigation
    const { createScene } = this.props.screenProps
    const storyId = this.props.activeStory._key

    createScene(data, storyId)
    navigate('Scene')
  }

  handleTouch() {
    const { navigate } = this.props.navigation

    navigate('CreateStory')
  }

  render() {
    const { handleTouch, submit, props } = this
    const { handleSubmit, activeStory } = props
    const { title, author, introduction, scenes, coverImg } = activeStory

    return (  
      <View style={globalStyles.container}>
        <ScrollView contentContainerStyle={[globalStyles.section, globalStyles.center]}>
          <View style={styles.textWrap}>
            <View style={[globalStyles.boxShadow, styles.imgWrap]}>
              <Image
                style={styles.img}
                source={{ uri: coverImg.uri }}
              />
            </View>

            <Br/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '48%'}}>
                <Button text={'Play'} />
              </View>
              <View style={{ width: '48%'}}>
                <Button 
                  text={'Edit'}
                  onPress={handleTouch}/>
              </View>
            </View>
          
            <Br size={40}/>

            <View style={globalStyles.center}>
              <Text style={globalStyles.h1}>
                {title}
              </Text>
              <Text style={globalStyles.subtext}>
                {author}
              </Text>
            </View>
            
            <Br size={10}/>
            {/* <Br size={20}/> */}

            {/* <Field
              name='title'
              placeholder={'Scene Title'}
              component={FormInput} />
            <Br/>
            <Button 
              text={'Start a New Scene'} 
              onPress={handleSubmit(submit)}
              position={'top'}/> */}
        
            {/* <SceneList scenes={scenes} {...props}/> */}
          </View>

          <Text style={globalStyles.p}>
            {introduction}
          </Text>

        </ScrollView>
      </View>
    )
  }
}

Story = reduxForm({
  form: 'CreateScene',
  enableReinitialize: true,
})(Story)

Story = connect(
  state => ({
    activeStory: state.stories.activeStory
  }),
)(Story)

export default Story

