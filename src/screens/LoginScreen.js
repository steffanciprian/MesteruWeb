import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {useHistory, withRouter} from "react-router-dom";
import * as authActions from '../store/actions/authentication';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState();

    // const pushSomethingToFirebase = () => {
    //     const firebaseRef = firebase.database().ref();
    //     firebaseRef.child("User").set(email + " si parola " + password).then(
    //         response => console.log(response)
    //     );
    // }

    const signUp = async () => {
        setError(null);
        try {
            await dispatch(authActions.signUp(email, password));
            history.push("/mainScreen");
        } catch (error) {
            setError(error.message);
        }

    }
    const logIn = async (email, password) => {
        setError(null);
        try {
            await dispatch(authActions.logIn(email, password));
            history.push("/mainScreen");
        } catch (error) {
            setError(error.message);
        }
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

export default withRouter(LoginScreen);
