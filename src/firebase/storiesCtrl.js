import { firebaseDB } from './';

const userId = 1

export const storiesCtrl = {
  createStory(data) {
    const newStory = {
      title: data.title,
      introduction: data.introduction,
    }
    
    return firebaseDB
      .ref('users/' + userId + '/games/')
      .push(newStory)
      .then(result => { return newStory })
  },

  fetchStories() {
    return firebaseDB
      .ref('users/' + userId + '/games/')
      .once('value')
      .then(result => { return result.val() })
  }
}
