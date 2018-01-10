import * as type from './types'
import { scenesCtrl } from '../firebase'

export const createScene = (storyId) => (dispatch) => {
  return scenesCtrl.create(storyId).then((scene) => {
    dispatch({ type: type.EDIT_SCENE })
  })
}

