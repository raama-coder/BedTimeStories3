import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDf2RoJy8fh1Ifil3wTSP1tnCm1_5DQQZw",
  authDomain: "story-hub-f9044.firebaseapp.com",
  projectId: "story-hub-f9044",
  storageBucket: "story-hub-f9044.appspot.com",
  messagingSenderId: "1046039456528",
  appId: "1:1046039456528:web:db78d8aede149aa99b1395"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();