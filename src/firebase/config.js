import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRnJXSjHe4KBzFB6VZNawRIKDC7cVZjRQ",
  authDomain: "kanban-task-a059f.firebaseapp.com",
  projectId: "kanban-task-a059f",
  storageBucket: "kanban-task-a059f.appspot.com",
  messagingSenderId: "996365427315",
  appId: "1:996365427315:web:12b077962941e4a3e34006",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, timestamp };
