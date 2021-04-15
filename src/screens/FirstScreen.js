import LoginScreen from "./LoginScreen";
import React, {useState} from "react";


const FirstScreen = () => {
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
        </div>)
}

export default FirstScreen;
