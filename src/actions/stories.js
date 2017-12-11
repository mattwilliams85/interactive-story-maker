import * as type from './types'
import { storiesCtrl } from '../firebase'

export const createStory = (data) => (dispatch) => {
  dispatch({ type: type.FETCH_STORIES })

  return storiesCtrl.create(data).then((story) => {
    dispatch({ type: type.CREATE_STORY })
  })
}

export const removeStory = (id) => (dispatch) => {
  return storiesCtrl.remove(id)
}

export const subscribeStories = (data) => (dispatch) => {
  dispatch({ type: type.FETCH_STORIES })

  return storiesCtrl.subscribe(dispatch, type.RECEIVE_STORIES)
}

export const editStory = (data) => (dispatch) => {
  dispatch({ 
    type: type.EDIT_STORY,
    data
  })
}

export const clearStory = (data) => (dispatch) => {
  dispatch({ type: type.CLEAR_STORY})
}