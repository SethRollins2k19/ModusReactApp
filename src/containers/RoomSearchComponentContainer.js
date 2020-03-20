import {connect} from 'react-redux'
// import roomReducer from "../reducers/roomReducer";
import {changeGuests, changeMaxDate, changeMinDate} from "../actions/RoomActions";
import RoomSearchComponent from "../component/UI/RoomSearchComponent";

const mapStateToProps = state => {
    const {Rooms} = state
    const {minDate,maxDate,guests} = Rooms.filter
    return {
        minDate,
        maxDate,
        guests
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeMinDate: date => dispatch(changeMinDate(date)),
        changeMaxDate: date => dispatch(changeMaxDate(date)),
        changeGuests: guests => dispatch(changeGuests(guests))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomSearchComponent)