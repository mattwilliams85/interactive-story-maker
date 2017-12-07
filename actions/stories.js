import * as types from './types'

export function createStory(data) {
  return {
    type: types.CREATE_STORY,
    data: data
  }
}
