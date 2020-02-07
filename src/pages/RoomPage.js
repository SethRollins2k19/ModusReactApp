import React from "react"
import MainContainerComponent from "../component/containers/MainContainer";
import MiniRoomComponent from "../component/UI/MiniRoomComponent";
import {ROOMS} from '../emulatedBD'

export default class RoomPage extends React.Component  {
    render() {
        return (
            <div className="room-page">
                <MainContainerComponent>
                    <div className="room-page__inner">
                        {ROOMS.map((room,index)=>{
                           return <MiniRoomComponent
                               key={index}
                               img={room.img !== null ? room.img : null}
                               hotelRoom={room.hotelRoom}
                               isLux={room.isLux}
                               costPerDay={room.costPerDay}
                               rating={room.rating}
                               reviews={room.reviews}
                           />
                        })}
                    </div>
                </MainContainerComponent>
            </div>
        )
    }
}