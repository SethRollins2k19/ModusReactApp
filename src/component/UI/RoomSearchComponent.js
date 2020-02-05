import React from "react"
import {Link} from "react-router-dom";
import FormContainer from "../containers/FormContainer"
import BtnComponent from "./BtnComponent"
import '../style/searchRoomStyle.sass'
import DatePickerComponent from "./DatePickerComponent";
import GuestsComponent from "./GuestsComponent";

export default function RoomSearchComponent (props){
    return (
        <FormContainer title={"Find room for you wishes"}>
            <form>
                <DatePickerComponent multi={true} classNameAdd={'datepicker--room-search'} title={['Arrived','Shipped']}  />
                <label htmlFor="guests" className={'datepicker__label datepicker__label--guests'}>Guests</label>
                <GuestsComponent />
                <div className={'btn--find-room'}>
                    <Link to={'/room'}><BtnComponent title={'Find room'} type={'Link'} locate={'/room'} /></Link>
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