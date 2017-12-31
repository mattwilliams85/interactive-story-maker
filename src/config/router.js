import { StackNavigator } from 'react-navigation'
import { CreateStory, Home, Story, Scene } from '../screens'

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'My Stories',
      headerStyle: {
        backgroundColor: '#0b3b4d',
      },
      headerTintColor: '#fff',
    }
  },
  CreateStory: {
    screen: CreateStory,
    navigationOptions: {
      title: 'New Story',
    }
  },
  Story: {
    screen: Story,
    navigationOptions: {
      title: 'Edit Story',
    }
  },
  Scene: {
    screen: Scene,
    navigationOptions: {
      title: 'Scene',
    }
  }
})



