import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

const Routing = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <div>
                        <Route exact path=""  component={LoginScreen}/>
                        <Route  exact path="/mainScreen"  component={MainScreen}/>
                    </div>
                </Switch>
            </Router>
        </div>)
}

ReactDOM.render(
    <Routing>
        <App/>
    </Routing>,
    document.getElementById('root')
);

