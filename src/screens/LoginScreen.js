import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginScreen.css';
import MainScreen from "./MainScreen";
import {BrowserRouter as Route} from 'react-router-dom';


const LoginScreen = props => {
    const [loggedIn, setLoggedin] = useState(false);
    const auth = firebase.auth();

    const signUp = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        setLoggedin(true);
    }
    const logIn = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        setLoggedin(true);
    }
    return (
        <div>
            <form>
                <Button style={{backgroundColor: "#87ceeb", borderColor: 'white'}}
                        onClick={() => signUp(props.email, props.password)}>SignUp</Button>
                <Button style={{backgroundColor: "#FFC0CB", borderColor: 'white'}}
                        onClick={() => logIn(props.email, props.password)}>Log in</Button>
            </form>
            {/*{loggedIn ? <Router>*/}
            {/*        <Route path="MainScreen" component={MainScreen}/>*/}
            {/*    </Router> :*/}
            {/*    null}*/}
        </div>

    )
}

export default LoginScreen;
