import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9bg43a1wBrpDN3VfD4BpqBeo9cQQqYfg",
  authDomain: "finnance-pwa.firebaseapp.com",
  databaseURL: "https://finnance-pwa.firebaseio.com",
  projectId: "finnance-pwa",
  storageBucket: "finnance-pwa.appspot.com",
  messagingSenderId: "153370378876",
  appId: "1:153370378876:web:069c7be99febc702eb3ff9",
  measurementId: "G-TSHJ3CWF0H"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
  db
}

export default firebase;
