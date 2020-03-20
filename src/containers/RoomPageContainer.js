import {connect} from "react-redux"
import {RoomPage} from "../pages/RoomPage";
import {fetchRooms, filter} from "../actions/RoomActions";


const mapToStateProps = state => {
    const {Rooms} = state
    return {
        isFetching: Rooms.isFetching,
        rooms: Rooms.rooms,
        sortedRooms: Rooms.sortedRooms
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: ()=>dispatch(fetchRooms()),
        filter: ()=>dispatch(filter())
    }
}
export default connect(mapToStateProps,mapDispatchToProps)(RoomPage)