import * as type from './types'
import { scenesCtrl } from '../firebase'

export const createScene = (data, storyId) => (dispatch) => {
  return scenesCtrl.create(data, storyId).then((scene) => {
    dispatch({ type: type.EDIT_SCENE })
  })
}

