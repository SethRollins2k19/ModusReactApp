import {combineReducers} from "redux";
import {FetchReducer, RoomReducer} from "./roomReducer";
import {UserReducer} from "./UserReducer";

export default combineReducers({RoomReducer,FetchReducer,UserReducer})