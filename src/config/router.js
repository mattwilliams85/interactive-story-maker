import { StackNavigator } from 'react-navigation'
import { CreateStory, Home, StoryScenes } from '../screens'

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  CreateStory: {
    screen: CreateStory,
    navigationOptions: {
      title: 'New Story',
    }
  },
  StoryScenes: {
    screen: StoryScenes,
    navigationOptions: {
      title: 'Scenes',
    }
  }
})


