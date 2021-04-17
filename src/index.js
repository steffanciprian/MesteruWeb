import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import ServiceDetailScreen from "./screens/ServiceDetailScreen";
import App from "./App";
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import authenticationReducer from "./store/reducers/authenticationReducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))


const AppInitialising = () => {
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginScreen}/>
                        <Route exact path="/mainScreen" component={MainScreen}/>
                        <Route exact path="/serviceDetailScreen" component={ServiceDetailScreen}/>
                    </Switch>
                </Router>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

