import React from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import {Button} from 'react-bootstrap';
// import {useDispatch} from 'react-redux';

const LoginScreen = props => {
    const auth = firebase.auth();

    const signUp = async (email,password) => {
       await auth.createUserWithEmailAndPassword(email, password)

    }
    const logIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).catch(error =>
            console.log(error))
    }
    return (
        <div>
            <form>
                <Button onClick={() => signUp(props.email, props.password)}>SignUp</Button>
                <Button onClick={() => logIn(props.email, props.password)}>Log in</Button>
            </form>
        </div>

    )
}

export default LoginScreen;
