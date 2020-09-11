import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9bg43a1wBrpDN3VfD4BpqBeo9cQQqYfg",
  authDomain: "finnance-pwa.firebaseapp.com",
  databaseURL: "https://finnance-pwa.firebaseio.com",
  projectId: "finnance-pwa",
  storageBucket: "finnance-pwa.appspot.com",
  messagingSenderId: "153370378876",
  appId: "1:153370378876:web:56d89480d3df2d07eb3ff9",
  measurementId: "G-EM63HZSZBX"
};

firebase.initializeApp(firebaseConfig);

const root = firebase.database().ref();
const wallets = firebase.database().ref("wallets");

const fb = {
  root,
  wallets
};

export const fbItemsParser = (items) => {
  return Object.keys(items).map(key => ({id: key, ...items[key]}));
}

export default fb;
