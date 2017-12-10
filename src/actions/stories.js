import * as type from './types'
import { storiesCtrl } from '../firebase'

export const createStory = (data) => (dispatch) => {
  return storiesCtrl.create(data).then((story) => {
    dispatch({ type: types.CREATE_STORY })
  })
}

export const subscribeStories = (data) => (dispatch) => {
  return storiesCtrl.subscribe(dispatch, type.FETCH_STORIES)
}