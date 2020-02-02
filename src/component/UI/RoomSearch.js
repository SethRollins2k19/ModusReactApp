import React from "react"
import FormContainer from "../containers/FormContainer"
import BtnComponent from "./BtnComponent"
import '../style/searchRoomStyle.sass'
import DatePickerComponent from "./DatePickerComponent";

export default function RoomSearch (props){
    return (
        <FormContainer title={"Find room for you wishes"}>
            <form>
                <DatePickerComponent multi={true} classNameAdd={'datepicker--room-search'} title={['Arrived','Shipped']}  />
                <label htmlFor="guests" className={'datepicker__label datepicker__label--guests'}>Guests</label>
                <select name="" id="guests" defaultValue="DEFAULT" >
                    <option  value="DEFAULT" disabled className={'guests__placeholder'}>Choose the value of guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                </select>
                <div className={'btn--find-room'}>
                    <BtnComponent title={'Find room'} />
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