import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

const Routing = () => {
    return (
        <div>
            <Switch>
                <Router>
                    <div>
                        <Route path="/" component={FirstScreen}/>
                        <Route path="/loginScreen" component={LoginScreen}/>
                        <Route path="/mainScreen" component={MainScreen}/>
                    </div>
                </Router>

            </Switch>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

