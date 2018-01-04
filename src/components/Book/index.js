import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Br } from '../../components'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

export default class Book extends Component {
  handleTouch() {
    const { editStory, clearStory } = this.props.screenProps
    const { navigate } = this.props.navigation
    const { story } = this.props

    editStory(story)
    navigate('Story')
  }

  render() {
    const { story } = this.props
    const { handleTouch } = this
    
    return (
      <TouchableWithoutFeedback onPress={handleTouch.bind(this)}>
        <View style={styles.card}>
          <View style={[styles.cover, globalStyles.boxShadow]}>
            <Image
              style={styles.img}
              source={{ uri: story.coverImg.uri }}
            />
          </View>

          <Text
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {story.title}
          </Text>
          <Text
            style={styles.author}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {story.author}
          </Text>
          <Br size={25} />

        </View>
      </TouchableWithoutFeedback>
    )
  }
}
