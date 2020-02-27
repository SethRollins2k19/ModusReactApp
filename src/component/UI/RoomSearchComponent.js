import React, {useState} from "react"
import {Link} from "react-router-dom";
import FormContainer from "../StyleContainers/FormContainer"
import BtnComponent from "./BtnComponent"
import '../style/searchRoomStyle.sass'
import DatePickerComponent from "./DatePickerComponent";
import GuestsComponent from "./GuestsComponent";
import {_} from "../../util/util";

export default function RoomSearchComponent (props){
    const {minDate,maxDate,guests,changeMinDate,changeMaxDate,changeGuests} = props
    const [startDate, setStartDate] = useState(minDate)
    const [endDate, setEndDate] = useState(maxDate)
    const [guest,setGuest] = useState(guests)
    return (
        <FormContainer title={"Find room for you wishes"}>
            <form>
                <DatePickerComponent multi={true}
                                     classNameAdd={'datepicker--room-search'}
                                     title={['Arrived','Shipped']}
                                     startDate={startDate}
                                     endDate={endDate}
                                     changeMinDate={setStartDate}
                                     changeMaxDate={setEndDate}
                />
                <label htmlFor="guests" className={'datepicker__label datepicker__label--guests'}>Guests</label>
                <GuestsComponent guests={{guest,setGuest}}/>
                <div className={'btn--find-room'}>
                    <Link to={`${_.defaultRouterPosition}room`} onClick={()=>{
                        changeMinDate(startDate)
                        changeMaxDate(endDate)
                        changeGuests(guest)
                    }}><BtnComponent  title={'Find room'} /></Link>
                </div>
            </form>
        </FormContainer>
    )
}
// function buttonTitle(props) {
//     return (
//         <div className={'btn--find-room'}>
//             <p className={'btn--find-room__title'}>Find room</p>
//         </div>
//     )
// }