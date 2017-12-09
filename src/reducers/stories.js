import createReducer from '../util/createReducer'
import * as types from '../actions/types'

const initialState = {}

export const stories = createReducer(initialState, {
  [types.CREATE_STORY](state, action) {
    const { title, introduction } = action.data
    const newStory = { title, introduction }

    return [...state, newStory]
  }
})
