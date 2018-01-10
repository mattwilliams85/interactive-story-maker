import { firebaseDB } from '../';
import { objectToArray } from '../../util'

const userId = 1
const path = `users/${userId}/games`

export const scenesCtrl = {
  create(storyId) {
    return firebaseDB.ref(`${path}/${storyId}/scenes`).push(newScene)
  },

  remove(id, storyId) {
    return firebaseDB.ref(`${path}/${storyId}/scenes/${id}`).remove()
  },

  update(data) {
    const updateScene = { title: data.title }

    return firebaseDB.ref(`${path}/${storyId}/scenes/${id}`).set(updateScene)
  }
}
