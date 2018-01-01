import * as type from './types'
import { storiesCtrl } from '../firebase'

export const createStory = (data) => (dispatch) => {
  dispatch({ type: type.FETCH_STORIES })

  return storiesCtrl.create(data).then((story) => {
    dispatch({ type: type.CREATE_STORY })
  })
}

export const clearStory = (data) => (dispatch) => {
  dispatch({ type: type.CLEAR_STORY })
}

export const editStory = (data) => (dispatch) => {
  dispatch({
    type: type.EDIT_STORY,
    data
  })
}

export const fetchStories = (data) => (dispatch) => {
  dispatch({ type: type.FETCH_STORIES })

  return storiesCtrl.subscribe(dispatch, type.RECEIVE_STORIES)
}

export const removeStory = (id) => (dispatch) => {
  return storiesCtrl.remove(id)
}

export const updateStory = (data) => (dispatch) => {
  return storiesCtrl.update(data).then((story) => {
    dispatch({ type: type.UPDATE_STORY })
  })
}

export const uploadImg = (data) => (dispatch) => {
  dispatch({
    type: type.UPLOAD_IMG,
    data
  })
}
