import { firebaseDB } from '../';
import { objectToArray } from '../../util'

const userId = 1
const path = `users/${userId}/games`

export const scenesCtrl = {
  create(story, dispatch, type) {
    const storyId = story._key
    let sceneCount = story.sceneCount + 1 || 1

    const newScene = {
      title: `Scene ${sceneCount}`
    }

    let updates = {}
    updates['/sceneCount'] = sceneCount
    
    if (!story) return
    firebaseDB.ref(`${path}/${storyId}`).update(updates).then((data) => {
      firebaseDB.ref(`${path}/${storyId}/scenes`).push(newScene)
      dispatch({
        type: type,
        payload: newScene,
      })
    })
    
  },

  remove(story, sceneId) {
    const storyId = story._key

    return firebaseDB.ref(`${path}/${storyId}/scenes/${sceneId}`).remove()
  },

  update(data) {
    const updateScene = { title: data.title }

    return firebaseDB.ref(`${path}/${storyId}/scenes/${id}`).update(updateScene)
  }
}
