import firebase from 'firebase/app'
import 'firebase/storage'
import {FirebaseUtils} from '@appsparkler/react-hfn-components'

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_apiKey
  , authDomain:REACT_APP_authDomain,
  databaseURL:REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)

FirebaseUtils.app = FirebaseApp

export default FirebaseApp
