import React from "react"
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import MiniRoomComponent from "../component/UI/MiniRoomComponent";
// import Banner from "../component/UI/Banner";
import UseFilterContainer from "../containers/UseFilterContainer";
import {Loading} from "../component/Loading";


export const RoomPage =  ({sortedRooms}) => {

    return (

        <div className="room-page">
            <MainContainerComponent>
                <div className="room-page__inner">
                    <UseFilterContainer/>
                    {!sortedRooms.length ? <Loading/> :
                        <div className="room-page__rooms">
                            {sortedRooms.map((room, index) => {
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
                        </div>}
                </div>
            </MainContainerComponent>
        </div>
    )
}