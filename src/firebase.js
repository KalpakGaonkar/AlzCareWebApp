import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyAkgAM9xWip8SoOYJY4y--ajyM7k1tX2rA",
//   authDomain: "simplify-alzheimers-dev.firebaseapp.com",
//   projectId: "simplify-alzheimers-dev",
//   storageBucket: "simplify-alzheimers-dev.appspot.com",
//   messagingSenderId: "520968695936",
//   appId: "1:520968695936:web:9a8bb2b2eebcd03a2fb665"

  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

var firebaseConfig = {
  apiKey: "AIzaSyAkgAM9xWip8SoOYJY4y--ajyM7k1tX2rA",
  authDomain: "simplify-alzheimers-dev.firebaseapp.com",
  projectId: "simplify-alzheimers-dev",
  databaseURL: "https://simplify-alzheimers-dev-default-rtdb.firebaseio.com/",
  storageBucket: "simplify-alzheimers-dev.appspot.com",
  messagingSenderId: "520968695936",
  appId: "1:520968695936:web:9a8bb2b2eebcd03a2fb665"
};

var fireDb = firebase.initializeApp(firebaseConfig)
const storage=firebase.storage()
// var database=fireDb.database()
export {storage, fireDb as default } 
export const auth = fireDb.auth()
export const firestore = fireDb.database()
// export default app
 