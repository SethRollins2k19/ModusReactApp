import {assistantFilter} from "./helpers/RoomHelper";

const RoomReducer = (
    state = {
        rooms: [],
        isFetching: false,
        isFetched: false,
        sortedRooms : [],
        filter : {
            minDate: new Date(),
            maxDate: new Date(new Date().getTime() + 	84000000) ,
            guests: {
                maxTotal: 12,
                total: 12,
                Adults: 4,
                Children: 4,
                Babies: 4
            },
            minPrice: 0,
            maxPrice: 9999
        }
    },action
)=>{
    switch (action.type) {
        case "RECEIVED_ROOM":{
            return {
                ...state,
                rooms: action.rooms,
                sortedRooms: action.rooms
            }
        }
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
        case "CHANGE_GUESTS": {
            return  {
                ...state,
                filter: {
                    ...state.filter,
                    guests: {
                        ...state.filter.guests,
                        ...action.guests
                    }
                }
            }
        }
        case "CHANGE_PRICE": {
            return  {
                ...state,
                filter: {
                    ...state.filter,
                    minPrice: parseInt(action.price[0]),
                    maxPrice: parseInt(action.price[1])
                }
            }
        }

        case "FILTER": {
            return {
                ...state,
                sortedRooms: [...assistantFilter(state)]
            }
        }
        default: return state
    }
}


export {RoomReducer}