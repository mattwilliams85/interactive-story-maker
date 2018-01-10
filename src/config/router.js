import { StackNavigator } from 'react-navigation'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CreateStory, Home, Story, Scene, CameraRoll, ListScenes } from '../screens'

const headerStyle = { backgroundColor: '#0b3b4d' }
const headerTintColor = '#fff'
const headerLeft = 
  <Feather 
    name={'settings'} 
    size={20} 
    color={'#fff'} 
    style={{paddingLeft:15}} />

function defaultOptions(title) {
  if (!title) return { headerStyle, headerTintColor }
  return { title, headerStyle, headerTintColor }
}

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Library',
      headerLeft, headerStyle, headerTintColor
    }
  },
  CreateStory: {
    screen: CreateStory,
    navigationOptions: defaultOptions()
  },
  Story: {
    screen: Story,
    navigationOptions: defaultOptions('Story')
  },
  Scene: {
    screen: Scene,
    navigationOptions: defaultOptions('Edit Scene')
  },
  ListScenes: {
    screen: ListScenes,
    navigationOptions: defaultOptions('Scenes')
  },
  CameraRoll: {
    screen: CameraRoll,
    navigationOptions: defaultOptions('Camera Roll')
  }
})



