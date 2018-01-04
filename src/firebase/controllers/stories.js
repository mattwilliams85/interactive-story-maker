import { firebaseDB } from '../';
import { objectToArray } from '../../util'

const userId = 1
const path = `users/${userId}/games/`

export const storiesCtrl = {
  create(data) {
    const newStory = {
      title: data.title,
      author: data.author,
      introduction: data.introduction,
      coverImg: data.coverImg,
    }
    
    return firebaseDB.ref(path).push(newStory)
  },

  remove(id) {
    return firebaseDB.ref(path + id).remove()
  },

  subscribe(dispatch, type) {
    firebaseDB.ref(path).on('value', (result) => {
      dispatch({
        type: type,
        payload: result.val()
      })
    })
  },

  update(data) {
    const updatedStory = {
      title: data.title,
      author: data.author,
      introduction: data.introduction,
      coverImg: data.coverImg,
    }

    return firebaseDB.ref(`${path}/${data._key}`).set(updatedStory)
  }
}
