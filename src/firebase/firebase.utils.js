import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTkey5ZM9PgtJ87ScYZ7kndR_xrvXAC3c",
    authDomain: "e-commerce-a7ea0.firebaseapp.com",
    databaseURL: "https://e-commerce-a7ea0.firebaseio.com",
    projectId: "e-commerce-a7ea0",
    storageBucket: "e-commerce-a7ea0.appspot.com",
    messagingSenderId: "734651267146",
    appId: "1:734651267146:web:04aa90ebd32c2b96e70eb3",
    measurementId: "G-WX9CWL829R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;

   