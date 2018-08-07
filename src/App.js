import React, {Component} from 'react';
//import logo from './logo.svg';
import MainGrid from './components/MainGrid';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/mainReducer';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <MainGrid/>
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
