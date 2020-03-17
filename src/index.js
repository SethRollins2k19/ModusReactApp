import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/normalize.css'
import App from './App'
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import middleWareThunk from "redux-thunk"
import {BrowserRouter as Router} from 'react-router-dom'
import RootReducer from "./reducers/RootReducer"
import ScrollToTop from "./ScrollToTop";
import {fetchRooms} from "./actions/RoomActions";
const store = createStore(RootReducer,applyMiddleware(middleWareThunk))
store.dispatch(fetchRooms())
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop/>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));