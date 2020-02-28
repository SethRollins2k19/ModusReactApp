import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/normalize.css'
import App from './App'
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import middleWareThunk from "redux-thunk"
import {BrowserRouter as Router} from 'react-router-dom'
import rootReducer from "./reducers/roomReducer"
const store = createStore(rootReducer, applyMiddleware(middleWareThunk))
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));