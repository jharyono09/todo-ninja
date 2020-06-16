import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWJTra8dT9xLnkLWmUXQXJoCknHDhONSk",
  authDomain: "todo-ninja-ab8df.firebaseapp.com",
  databaseURL: "https://todo-ninja-ab8df.firebaseio.com",
  projectId: "todo-ninja-ab8df",
  storageBucket: "todo-ninja-ab8df.appspot.com",
  messagingSenderId: "346765957635",
  appId: "1:346765957635:web:928c073df0300e36f38c36",
  measurementId: "G-F4FP7ENMXC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({});

export default db;