import * as type from '../actions/types'

initialState = {
  activeScene: {
    title: null,
    id: null,
  }
}

export function scenes(state = initialState, action) {
  switch (action.type) {
    case type.SELECT_SCENE:
      return {
        ...state, 
        activeScene: action.payload
      }
    default:
      return state
  }
}