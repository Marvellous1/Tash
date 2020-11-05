import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCO7qnmzIi1rDXRZ_tzUXheDUMO1kxs2kM",
    authDomain: "studyguru-7f444.firebaseapp.com",
    databaseURL: "https://studyguru-7f444.firebaseio.com",
    projectId: "studyguru-7f444",
    storageBucket: "",
    messagingSenderId: "933019785372",
    appId: "1:933019785372:web:9531d90d60d0bc1f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true});

export default firebase;