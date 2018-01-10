import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Text, View, ScrollView, TouchableHighlight, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Button, FormInput, Br, SceneList, Link } from '../../components/'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

class Story extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.handleTouch = this.handleTouch.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    const headerRight =
      <TouchableHighlight>
        <MaterialIcons
          onPress={onPress}
          name={'more-horiz'}
          size={30} color={'#fff'}
          style={{ paddingRight: 15 }} />
      </TouchableHighlight>
    
    function onPress() {
      navigate('CreateStory')
    }

    return { headerRight }
  };

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
    const { updateStory, removeStory } = props.screenProps
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
              <Link
                data={activeStory}
                destination={'CreateStory'}
                action={updateStory}
                icon={'edit'}
                {...props} />
              <Link 
                data={activeStory} 
                destination={'PlayStory'} 
                icon={'play'}
                {...props} />
              <Link
                data={activeStory._key}
                destination={'back'}
                action={removeStory}
                icon={'trash'}
                {...props} />
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

