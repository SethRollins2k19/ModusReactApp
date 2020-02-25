import {connect} from 'react-redux'
// import roomReducer from "../reducers/roomReducer";
import {changeMaxDate, changeMinDate} from "../actions/RoomActions";
import RoomSearchComponent from "../component/UI/RoomSearchComponent";

const mapStateToProps = state => {
    const {RoomReducer} = state
    const {minDate,maxDate,guests} = RoomReducer.filter
    return {
        minDate,
        maxDate,
        guests
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeMinDate: date => dispatch(changeMinDate(date)),
        changeMaxDate: date => dispatch(changeMaxDate(date))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomSearchComponent)