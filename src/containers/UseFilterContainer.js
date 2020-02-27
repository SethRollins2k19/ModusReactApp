import {connect} from "react-redux"
import UseFilter from "../component/UI/FilterComponent";
import {
    changeGuests,
    changeMaxDate,
    changeMinDate,
    changePrice
} from "../actions/RoomActions";


const mapStateToProps = state => {
    const {RoomReducer} = state
    const {minDate,maxDate,guests,minPrice,maxPrice} = RoomReducer.filter
    return {
        minDate,
        maxDate,
        guests,
        minPrice,
        maxPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeMinDate: date => dispatch(changeMinDate(date)),
        changeMaxDate: date => dispatch(changeMaxDate(date)),
        changeGuests: guests => dispatch(changeGuests(guests)),
        changePrice: price => dispatch(changePrice(price)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UseFilter)