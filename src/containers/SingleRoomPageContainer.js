import {connect} from "react-redux"
import SingleRoomPage from "../pages/SingleRoomPage";
import {fetchRooms} from "../actions/RoomActions";
import {addOrders} from "../actions/UserAction";



const mapToStateProps = state => {
    const {Rooms,User} = state
    return {
        currentDate: {
            start: Rooms.filter.minDate,
            end: Rooms.filter.maxDate
        },
        isLogin: User.isLogin,
        id: User._id,
        error: User.error,
        rooms: Rooms.rooms
    }
}
const mapDispatchToProps = ()=>dispatch => {
    return {
        addOrders: (order) => dispatch(addOrders(order)),
        fetchRooms: ()=>dispatch(fetchRooms()),
        clearError: ()=>dispatch({
            type: "ERROR",
            error: ""
        })
    }
}

export default connect(mapToStateProps,mapDispatchToProps)(SingleRoomPage)
