import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/normalize.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {ROOMS} from './util/util'
ReactDOM.render(
    <Router>
    <App />
    </Router>
    , document.getElementById('root'));