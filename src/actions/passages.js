import * as type from './types'
import { passagesCtrl } from '../firebase'

export const createPassage = (data, storyId, sceneId) => (dispatch) => {
  return passagesCtrl.create(data, storyId, sceneId).then((scene) => {
    dispatch({ type: type.UPDATE_STORY })
  })
}

