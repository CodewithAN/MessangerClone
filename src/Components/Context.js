import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { auth, db, Provider } from '../Config'
import firebase from "firebase/compat/app";



export const ContextProvide=createContext()
const Context = (props) => {
  const [user, setUser] = useState(null)
  const [loader, settLoader] = useState(false)
  const [Messages,setMessages]=useState([])
  
  const Register = () => {
    signInWithPopup(auth, Provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken;
      const user = result.user
      setUser(user)
      settLoader(true)
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      settLoader(true)
    })
  }, []);
  
  const Logout = () => {
    const auth= getAuth()
    signOut(auth).then(() => {
      setUser(false)
      settLoader(false)
    }).catch((error) => {
      alert(error)
    })
  }

  const allMessages = async (data) => {  
    await db.collection("user_messages").doc().set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      data,
      photo: user.photoURL,
      username: user.displayName,
    })
  }
  
  useEffect(() => {
    db.collection("user_messages")
    .orderBy("timestamp", "desc")
  .onSnapshot((snapshot) => {
    setMessages(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });

}, []);


    return (
        <ContextProvide.Provider value={{user,loader,Register,Logout,allMessages,Messages}} >{props.children}</ContextProvide.Provider>
  )
}
export default Context