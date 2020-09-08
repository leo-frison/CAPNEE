import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxpy0Tq_2XnaXB0fak4osPmvZUY5zX_js",
    authDomain: "fb-crud-react-8a37d.firebaseapp.com",
    databaseURL: "https://fb-crud-react-8a37d.firebaseio.com",
    projectId: "fb-crud-react-8a37d",
    storageBucket: "fb-crud-react-8a37d.appspot.com",
    messagingSenderId: "7548147939",
    appId: "1:7548147939:web:40e13c5ecafbb83fe08dd6"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
