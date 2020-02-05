import React from "react"
import MainContainerComponent from "../component/containers/MainContainer";
import MiniRoomComponent from "../component/UI/MiniRoomComponent";
import room from '../assets/rooms/room-1.png'
export default class RoomPage extends React.Component  {
    render() {
        return (
            <div className="room-page">
                <MainContainerComponent>
                    <div className="room-page__inner">
                        <MiniRoomComponent img={room}/>
                    </div>
                </MainContainerComponent>
            </div>
        )
    }
}