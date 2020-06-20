import firebase, { database, firestore, storage, auth } from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC1K3XmbfQ1KD9lDn01w1QY6M_RmgBu6Z4",
  authDomain: "loginapp-ddf71.firebaseapp.com",
  databaseURL: "https://loginapp-ddf71.firebaseio.com",
  projectId: "loginapp-ddf71",
  storageBucket: "loginapp-ddf71.appspot.com",
  messagingSenderId: "1065465450029",
  appId: "1:1065465450029:web:2f671acc230b73e3adb2a4",
  measurementId: "G-97PD9KQ8XZ",
};
firebase.initializeApp(firebaseConfig);

export const fdata = database();
export const fstore = firestore();
export const fstorage = storage();
export const fauth = auth();
