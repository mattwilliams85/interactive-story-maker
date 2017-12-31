import { firebaseDB } from '../';

const userId = 1
const path = `users/${userId}/games`

export const passagesCtrl = {
  create(data, storyId, sceneId) {
    const newPassage = { text: data.passage }

    return firebaseDB.ref(`${path}/${storyId}/scenes/${sceneId}`).push(newPassage)
  },

  // remove(id, storyId) {
  //   return firebaseDB.ref(`${path}/${storyId}/scenes/${id}`).remove()
  // },

  // update(data) {
  //   const updateScene = { title: data.title }

  //   return firebaseDB.ref(`${path}/${storyId}/scenes/${id}`).set(updateScene)
  // }
}
