import {connect} from "react-redux"
import SingleRoomPage from "../pages/SingleRoomPage";



const mapToStateProps = state => {
    const {RoomReducer} = state
    return {
        currentDate: {
            start: RoomReducer.filter.minDate,
            end: RoomReducer.filter.maxDate
        },
        rooms: RoomReducer.rooms
    }
}


export default connect(mapToStateProps)(SingleRoomPage)
