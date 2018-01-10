import * as type from '../actions/types'

const initialState = {
  entities: [],
  isLoading: false,
  activeStory: {
    title: null,
    author: null,
    coverImg: {},
    introduction: null
  }
}

export function stories(state = initialState, action) {
  function getActiveStory(data) {
    if (state.activeStory) {
      const key = state.activeStory._key
      return key && data[key] ? data[key] : initialState.activeStory
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
        activeStory: action.data,
        activeImg: null,
      }
    case type.CLEAR_STORY:
      return {
        ...state,
        activeStory: null,
        activeImg: null,
      }
    case type.UPLOAD_IMG:
      return {
        ...state,
        activeImg: action.data,
      }
    default:
      return state
  }
}