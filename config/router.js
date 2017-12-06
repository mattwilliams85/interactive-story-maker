import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import CreateGame from '../screens/CreateGame'

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  CreateGame: {
    screen: CreateGame,
    navigationOptions: {
      title: 'New Game',
      headerBackTitle: 'Back',
    }
  },
})


