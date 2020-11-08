import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESS_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const createNote = (title, content) => {
  return db.collection('notes')
    .add({
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      content: content
    });
};

export const fetchNotes = () => {
  return db.collection('notes')
    .orderBy('createdOn', 'desc')
    .get();
};

export const deleteNote = (uid) => {
  return db.collection('notes')
    .doc(`${uid}`)
    .delete();
};

export const updateNote = (uid, title, content) => {
  return db.collection('notes')
    .doc(`${uid}`)
    .set({
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      content: content,
    });
};
