import * as type from '../actions/types'

const initialState = {
  entities: [],
  isLoading: false,
}

export function stories(state = initialState, action) {
  function getActiveStory(data) {
    if (state.activeStory) {
      const key = state.activeStory._key

      if (key) return data[key]
    }
  }

  switch (action.type) {
    case type.CREATE_STORY:
    case type.UPDATE_STORY:
      return {
        ...state,
        isLoading: false,
      }
    case type.FETCH_STORIES:
      return {
        ...state,
        isLoading: true,
      }
    case type.RECEIVE_STORIES:
      return {
        ...state,
        entities: action.payload,
        activeStory: getActiveStory(action.payload),
        isLoading: false,
      }
    case type.EDIT_STORY:
      return {
        ...state,
        activeStory: action.data
      }
    case type.CLEAR_STORY:
      return {
        ...state,
        activeStory: null,
      }
    default:
      return state
  }
}