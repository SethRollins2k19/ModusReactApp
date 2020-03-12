import React from "react"
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import MiniRoomComponent from "../component/UI/MiniRoomComponent";
import Banner from "../component/UI/Banner";
import UseFilterContainer from "../containers/UseFilterContainer";


export const RoomPage =  ({sortedRooms}) => {

    // if(!isFetching){
    //     console.log(rooms)
    //     console.log(sortedRooms)
    //     fetchRooms()
    // }
    return (

        <div className="room-page">
            <MainContainerComponent>
                <div className="room-page__inner">
                    <UseFilterContainer/>
                    {!sortedRooms.length ? <Banner title="No rooms with such filter"
                                             subtitle="change setting of filter to view more rooms"/> :
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