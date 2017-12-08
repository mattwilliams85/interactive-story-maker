import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as storiesReducer from './stories'

const reducers = { form: formReducer }

const mergedReducers = Object.assign(storiesReducer, reducers)

export default combineReducers(mergedReducers)