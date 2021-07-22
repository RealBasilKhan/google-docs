import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtSqnLz8KjbhiCSaks11H9nf1PE-Fiamk",
  authDomain: "docs-yt-16854.firebaseapp.com",
  projectId: "docs-yt-16854",
  storageBucket: "docs-yt-16854.appspot.com",
  messagingSenderId: "97840740230",
  appId: "1:97840740230:web:ef4343d5e051ca4e1a9e07"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();

export { db };