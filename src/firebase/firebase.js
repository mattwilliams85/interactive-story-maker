import firebase from 'firebase'
import config from './config'

export const firebaseApp = firebase.initializeApp(config)
export const firebaseDB = firebaseApp.database()
export const firebaseAuth = firebaseApp.auth()