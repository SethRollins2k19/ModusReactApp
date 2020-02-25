import {ROOMS} from "../emulatedBD";
import {assistantFilter} from "./helpers/RoomHelper";
import {combineReducers} from "redux";

const RoomReducer = (
    state = {
        rooms: [...ROOMS],
        sortedRooms : [...ROOMS],
        filter : {
            minDate: new Date(),
            maxDate: new Date(new Date().getTime() + 	84000000) ,
            guests: {
                total: 0,
                Adults: 10,
                Children: 10,
                Babies: 10
            },
            minPrice: 0,
            maxPrice: 9999
        }
    },action
)=>{
    switch (action.type) {
        case "CHANGE_MINDATE": {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    minDate: action.date
                }
            }
        }
        case "CHANGE_MAXDATE": {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    maxDate: action.date
                }
            }
        }
        case "CHANGE_GUEST": {
            return  {
                ...state,
                filter: {
                    ...state.filter,
                    guests: {
                        ...state.filter.guests,
                        [action.name]: action.value
                    }
                }
            }
        }
        case "GUESTS": {
            return state
        }
        case "FILTER": {
            return {
                ...state,
                sortedRooms: assistantFilter(state)
            }
        }
        default: return state
    }
}
export default combineReducers({RoomReducer})