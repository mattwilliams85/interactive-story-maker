import * as type from './types'
import { scenesCtrl } from '../firebase'
import { store } from '../../App'

export const createScene = () => (dispatch) => {
  const story = store.getState().stories.activeStory
  
  return scenesCtrl.create(story, dispatch, type.SELECT_SCENE)
}

export const removeScene = (sceneId) => (dispatch) => {
  const story = store.getState().stories.activeStory

  return scenesCtrl.remove(story, sceneId)
}

export const selectScene = (data) => (dispatch) => {
  dispatch({type: type.SELECT_SCENE, payload: data})
}

