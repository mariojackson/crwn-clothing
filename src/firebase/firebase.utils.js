import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAcfgV5uqIJxaZUUlu3Zjzy1hAomg5KXPI',
  authDomain: 'crwn-storage.firebaseapp.com',
  databaseURL: 'https://crwn-storage.firebaseio.com',
  projectId: 'crwn-storage',
  storageBucket: 'crwn-storage.appspot.com',
  messagingSenderId: '531651380190',
  appId: '1:531651380190:web:204da82e288687bb44534f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
