import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA91oXkIFRgGZwx5MuQgKDlnWWZgZjP8-0',
  authDomain: 'maelys-190cc.firebaseapp.com',
  projectId: 'maelys-190cc',
  storageBucket: 'maelys-190cc.appspot.com',
  messagingSenderId: '762057722630',
  appId: '1:762057722630:web:4946584dec1b913ad76c87',
  measurementId: 'G-HXVXLFEYJ7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase storage
const projectStorage = firebase.storage();

// Initialize Firebase firestore
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
