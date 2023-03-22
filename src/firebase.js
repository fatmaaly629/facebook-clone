import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO_CDz1iNCEd3jUvRl0xxVi_rpZiIMjc8",
  authDomain: "facebook-clone-c9d8c.firebaseapp.com",
  projectId: "facebook-clone-c9d8c",
  storageBucket: "facebook-clone-c9d8c.appspot.com",
  messagingSenderId: "767016417531",
  appId: "1:767016417531:web:6c2a6b98da7a1e9905985e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
