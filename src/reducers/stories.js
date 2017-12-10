import createReducer from '../util/createReducer'
import * as type from '../actions/types'

const initialState = []

export function stories(state = initialState, action) {
  switch (action.type) {
    case type.CREATE_STORY:
      return state
    case type.FETCH_STORIES:
      return action.payload
    default:
      return state
  }
}