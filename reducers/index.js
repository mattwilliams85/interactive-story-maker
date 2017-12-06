import { combineReducers } from 'redux'
import * as storiesReducer from './stories'

export default combineReducers(Object.assign(
  storiesReducer,
))
