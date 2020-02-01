import React from "react"
import FormContainer from "../containers/FormContainer"
import BtnComponent from "./BtnComponent"
import '../style/searchRoomStyle.sass'

export default function RoomSearch (props){
    return (
        <FormContainer title={"Find room for you wishes"}>
            <form>
                <label htmlFor="arrived"></label>
                <input type="date" id={'arrived'}/>
                <label htmlFor="shipped"></label>
                <input type="date"/>
                <label htmlFor="guests"></label>
                <input type="text" id={'guests'}/>
            </form>
        </FormContainer>
    )
}