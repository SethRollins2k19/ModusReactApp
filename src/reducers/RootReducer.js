import {combineReducers} from "redux";
import {RoomReducer} from "./roomReducer";
import {UserReducer} from "./UserReducer";

export default combineReducers({Rooms: RoomReducer,User: UserReducer})