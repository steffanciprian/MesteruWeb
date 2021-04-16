import React, {useState} from "react";
import {Button} from "react-bootstrap";
import firebase from "firebase";
import {useHistory} from "react-router-dom";

const LoginScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // const pushSomethingToFirebase = () => {
    //     const firebaseRef = firebase.database().ref();
    //     firebaseRef.child("User").set(email + " si parola " + password).then(
    //         response => console.log(response)
    //     );
    // }
    const [loggedIn, setLoggedin] = useState(false);
    const auth = firebase.auth();

    const signUp = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password).then(
            response => {
                setLoggedin(true);
                console.log("am ajuns aici");
                console.log(response.user.getIdToken());
                history.push("/mainScreen")
            }
        )
    }
    const logIn = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password).then(
            response => {
                setLoggedin(true);
                console.log("am ajuns aici");
                console.log(response.user.getIdToken());
                history.push("/mainScreen")
            }
        )

    }
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
                <div>
                    <form>
                        <Button style={{backgroundColor: "#87ceeb", borderColor: 'white'}}
                                onClick={() => signUp(email, password)}>SignUp</Button>
                        <Button style={{backgroundColor: "#FFC0CB", borderColor: 'white'}}
                                onClick={() => logIn(email, password)}>Log in</Button>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen;
