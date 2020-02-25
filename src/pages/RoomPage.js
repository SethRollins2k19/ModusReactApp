import React from "react"
import MainContainerComponent from "../component/containers/MainContainer";
import MiniRoomComponent from "../component/UI/MiniRoomComponent";
import {ROOMS} from '../emulatedBD'
import Banner from "../component/UI/Banner";

export default class RoomPage extends React.Component  {
    render() {
        const {rooms} = this.props

        return (
            !rooms ? <Banner title="No rooms with such filter" subtitle="change setting of filter to view more rooms"/>
            :
            <div className="room-page">
                <MainContainerComponent>
                    <div className="room-page__inner">
                        {rooms.map((room,index)=>{
                           return <MiniRoomComponent
                               key={index}
                               slug={room.slug}
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