import React, { createContext, useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import { auth, db } from "./Config";

export const ContextProvider = createContext()

const ContextFun = (props) => {

    const [user, SetUser] = useState(null)
    const [loader, Setloader] = useState(true)
    const [Allmsg, setAllMsg]=useState([])

    const register = () => {
        const provider = new  firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
            firebase.auth().signInWithRedirect(provider)
        })
    }

    const logout = () => {
        auth.signOut().then(() => {
            SetUser(null)
        })
    }

    const SendMessage=(msg)=>{
        console.log(msg)
        db.collection("messages").add({
            msg,
            photo: user.photoURL,
            email : user.email,
            username: user.displayName,
            currentTime : firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            SetUser(user)
            Setloader(false)
        })

        db.collection("messages").orderBy("currentTime", "desc").onSnapshot(snp => {
            console.log(snp.docs)
            setAllMsg(snp.docs.map((doc) => {
                return (
                        {
                            id : doc.id,
                            ...doc.data(),            
                        }
                )
            })) 
        })
    }, [])
    
    console.log(user)

    return (
        <ContextProvider.Provider value={{register,user,loader, logout, SendMessage, Allmsg}} >{props.children}</ContextProvider.Provider>
    )
}

export { ContextFun }