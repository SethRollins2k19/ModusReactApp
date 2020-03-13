import {connect} from "react-redux"
import SingleRoomPage from "../pages/SingleRoomPage";
import {fetchRooms} from "../actions/RoomActions";



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
const mapDispatchToProps = ()=>dispatch => {
    return {
        fetchRooms: ()=>dispatch(fetchRooms())
    }
}

export default connect(mapToStateProps,mapDispatchToProps)(SingleRoomPage)
