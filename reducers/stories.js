import createReducer from '../util/createReducer'
import * as types from '../actions/types'

export const storiesIndex = createReducer({}, {

})

export const storiesCount = createReducer(0, {
  [types.ADD_STORY](state, action) {
    return state + 1
  }
})
