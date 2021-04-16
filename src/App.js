import './App.css';
import React from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

function App() {
    return (
        <div>
        </div>
    )
}

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyByPWQKcE5cE-q7VAAWt8mB8FShJUvNK-0",
    authDomain: "mesteru-36ae7.firebaseapp.com",
    databaseURL: "https://mesteru-36ae7-default-rtdb.firebaseio.com",
    projectId: "mesteru-36ae7",
    storageBucket: "mesteru-36ae7.appspot.com",
    messagingSenderId: "788242035467",
    appId: "1:788242035467:web:8f1e636f5afbabd793280e",
    measurementId: "G-47WBFQ2VKP"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
export default App;
