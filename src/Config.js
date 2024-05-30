import firebase from 'firebase/compat/app';
import {getAuth, GoogleAuthProvider}from 'firebase/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAD37Sps1fp1yw4X3c_TN34ftHhIKdwuRw",
  authDomain: "messenger-pakistan.firebaseapp.com",
  projectId: "messenger-pakistan",
  storageBucket: "messenger-pakistan.appspot.com",
  messagingSenderId: "525270324249",
  appId: "1:525270324249:web:3a369b6cfe927bbc1cc688"
};
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = getAuth(firebaseApp);
  const Provider=new GoogleAuthProvider()
 
  export {db,auth,Provider}