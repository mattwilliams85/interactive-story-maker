import { StackNavigator } from 'react-navigation'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CreateStory, Home, Story, Scene, CameraRoll } from '../screens'

const headerStyle = { backgroundColor: '#0b3b4d' }
const headerTintColor = '#fff'
const headerLeft = 
  <Feather 
    name={'settings'} 
    size={20} 
    color={'#fff'} 
    style={{paddingLeft:15}} />
const headerRight = 
  <Feather 
    name={'feather'} 
    size={20} 
    color={'#fff'} 
    style={{paddingRight:15}}/>

function defaultOptions(title) {
  return { title, headerStyle, headerTintColor }
}

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Library',
      headerLeft, headerRight, headerStyle, headerTintColor
    }
  },
  CreateStory: {
    screen: CreateStory,
    navigationOptions: defaultOptions('New Story')
  },
  Story: {
    screen: Story,
    navigationOptions: defaultOptions('Edit Story')
  },
  Scene: {
    screen: Scene,
    navigationOptions: defaultOptions('Edit Scene')
  },
  CameraRoll: {
    screen: CameraRoll,
    navigationOptions: defaultOptions('Camera Roll')
  }
})

export const ModalStack = StackNavigator({
  Test: {
    screen: CreateStory,
  },
});



