import './App.css';
import After_Auth from './Components/After_Auth';
import SignIn from './SignIn';
import { auth, provider } from "./firebase-config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
function App() {
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
      setUser(currentUser);
    })
    return ()=>{play()};
  })
  return (
    <div className="App">
      {auth.currentUser!=null? <After_Auth/> : <SignIn/>}              
    </div>
  );
}

export default App;
