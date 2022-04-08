import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnVBEIAwVMXa6MER7a-vPSi-9bKPXcNLE",
  authDomain: "test-feeb9.firebaseapp.com",
  databaseURL: "https://test-feeb9-default-rtdb.firebaseio.com",
  projectId: "test-feeb9",
  storageBucket: "test-feeb9.appspot.com",
  messagingSenderId: "780479634295",
  appId: "1:780479634295:web:c049a47578e33cb906df72",
  measurementId: "G-X6DHENK8Q2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//setting the data into the database
database
  .ref()
  .set(["acme", "came", "acre", "care", "race", "alec", "leas", "seal"]);

export { firebase, database as default };
