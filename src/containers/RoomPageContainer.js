import {connect} from "react-redux"
import RoomPage from "../pages/RoomPage";


const mapToStateProps = state => {
    const {RoomReducer} = state
    return {
        rooms: RoomReducer.sortedRooms
    }
}

export default connect(mapToStateProps)(RoomPage)