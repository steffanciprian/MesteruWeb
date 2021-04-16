import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import App from "./App";

const AppInitialising = () => {
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginScreen}/>
                    <Route exact path="/mainScreen" component={MainScreen}/>
                </Switch>
            </Router>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

