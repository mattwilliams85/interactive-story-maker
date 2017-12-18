import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as storiesReducer from './stories'
import * as scenesReducer from './scenes'

const reducers = { form: formReducer }

const mergedReducers = Object.assign(storiesReducer, scenesReducer, reducers)

export default combineReducers(mergedReducers)