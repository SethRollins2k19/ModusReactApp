import React, {useState} from "react"
import GuestsComponent from "../GuestsComponent";

export const SingleRoomGuestsWrapper = ({guests, addClassName = ""}) => {

    const [guest, setGuest] = useState(guests)
    return(
        <div className={addClassName}>
            <GuestsComponent guests={{guest, setGuest}}/>
        </div>
    )
}