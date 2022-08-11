import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
firebase.initializeApp({
    apiKey: "AIzaSyD5-Ow8IgegDpMKcKIueP4JRL_8XnK1hg4",
    authDomain: "chat-room-0323.firebaseapp.com",
    projectId: "chat-room-0323",
    storageBucket: "chat-room-0323.appspot.com",
    messagingSenderId: "743749363336",
    appId: "1:743749363336:web:56feb9bb2d451fe865a13d",
    measurementId: "G-9CY4VP2GR2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
    return (
        <div className="App">
          <header className="App-header">
          <SignIn/>
          </header>

        </div>
    );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}


function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default App;
