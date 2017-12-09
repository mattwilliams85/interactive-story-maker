import * as types from './types'
import { storiesCtrl } from '../firebase'

export const createStory = (data) => (dispatch) => {
  return storiesCtrl.createStory(data).then((story) => {
    dispatch(setStory(story))
  })
}

function setStory(story) {
  return {
    type: types.CREATE_STORY,
    data: story
  }
} 