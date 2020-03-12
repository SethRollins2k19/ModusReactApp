import {connect} from "react-redux"
import {RoomPage} from "../pages/RoomPage";
import {fetchRooms, filter} from "../actions/RoomActions";


const mapToStateProps = state => {
    const {RoomReducer} = state
    return {
        isFetching: RoomReducer.isFetching,
        rooms: RoomReducer.rooms,
        sortedRooms: RoomReducer.sortedRooms
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: ()=>dispatch(fetchRooms()),
        filter: ()=>dispatch(filter())
    }
}
export default connect(mapToStateProps,mapDispatchToProps)(RoomPage)