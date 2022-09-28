import React from 'react'
import { useEffect, useState } from "react";
import { auth, provider } from "./firebase-config";
import './SignIn.css'
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import "./App.css";

function SignIn() {
  var [user,setUser]=useState({});
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
      .then((result) => {
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      })
    }
    useEffect(()=>{
      const play=onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        setUser(currentUser);
      })
      return ()=>{play()};
    })
    const logout=async ()=>{
      await signOut(auth);
    }
  return (
    <div className='SignIn'>
        <div className="title">
            Welcome in Red Hat ,<br></br> Please sign in to get full experience :
        </div>
        <div className="body">
          
            <div className="button">
                <button type="button" className="btn btn-warning" onClick={signInWithGoogle}>Sign In</button>
            </div>
            
        </div>
    </div>
  )
}

export default SignIn