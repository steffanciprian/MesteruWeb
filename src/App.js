import './App.css';
import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import LoginScreen from "./screens/LoginScreen";
import {Link, BrowserRouter as Router} from "react-router-dom"


function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const pushSomethingToFirebase = () => {
    //     const firebaseRef = firebase.database().ref();
    //     firebaseRef.child("User").set(email + " si parola " + password).then(
    //         response => console.log(response)
    //     );
    // }

    return (
        <div className="App">
            <form>
                <label>
                    Email:
                    <input
                        onChange={event => setEmail(event.target.value)}
                        type="text" name="name"/>
                </label>
            </form>
            <form>
                <label>
                    Password:
                    <input
                        onChange={event => setPassword(event.target.value)}
                        type="password" name="name"/>
                </label>
                <LoginScreen email={email}
                             password={password}
                />
            </form>
        </div>
    );
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
