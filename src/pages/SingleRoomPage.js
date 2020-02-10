//react tools
import React from "react"
// import PropTypes from '../../node_modules/prop-types'



//react component
import Banner from "../component/UI/Banner"

//style
import '../component/style/singleRoomPage.sass'


//dev help
import front from '../assets/rooms/room-1.png'
import bedroom from '../assets/rooms/room-1-bedroom.png'
import livingRoom from '../assets/rooms/room-1-livingRoom.png'
import MainContainerComponent from "../component/containers/MainContainer";
import imgTest from '../assets/rooms/comfort.svg'
import {ROOMS,DETAILS} from '../emulatedBD'


const getRoom = (slug,rooms) => {
    let templateRooms = [...rooms]
    return templateRooms.find(room=> room.slug === slug)
}
const getDetails = (key ,detailsList)=>{
    let templateDetails = detailsList;
    return key in templateDetails ? templateDetails[key] : null;
}
export default class SingleRoomPage extends React.Component{


    render() {

        const room = getRoom(this.props.match.params.slug, ROOMS)
        if(!room){
            return (
                <Banner title="no such page" subtitle="Somewhen here will be room, but no now"/>
            )
        }
        const { img, hotelRoom, isLux, costPerDay, reviews, details} = room
        return (
            <div className='single-room'>
                <header className='single-room__header'>
                    <img src={front} alt="img" className='single-room__img single-room__main-img'/>
                    <img src={bedroom} alt="img" className='single-room__img'/>
                    <img src={livingRoom} alt="img" className='single-room__img'/>
                </header>
                <MainContainerComponent>
                    <div className='single-room__inner'>
                        <div className="single-room__info">
                            <div className="single-room__description">
                                <div className="details">
                                    <h2 className='single-room__title'>Room Details</h2>
                                    <div className="details__inner">
                                        {details.map(item =>{
                                            return (<DetailsInner item={item}/>)
                                        })}
                                    </div>
                                </div>
                                <div className="single-room__impressions">
                                    <h2 className='single-room__title'>Room Impressions</h2>
                                </div>

                            </div>
                            <div className="single-room__reviews">

                            </div>
                            <div className="single-room__rules">

                            </div>
                        </div>
                        <div className="single-room__payment">

                        </div>
                    </div>
                </MainContainerComponent>
            </div>
        );
    }
}


function DetailsInner ({item}){
    let detailsItem = getDetails(item, DETAILS)
    if(!detailsItem){
        return (<></>)
    }
    const {img, title, subTitle} = detailsItem
    return (
        <div className="details__item">
            <img src={img} alt="details"/>
            <div className="details__info">
                <h2 className="details__title">
                    {title}
                </h2>
                <p className='details__description'>
                    {subTitle}
                </p>
            </div>
        </div>
    )
}


// {/*<div className="details__item">*/}
// {/*    <img src={''} alt=""/>*/}
// {/*    <div className="details__info">*/}
// {/*        <h2 className="details__title">*/}
//
// {/*        </h2>*/}
// {/*        <p className='details__description'>*/}
//
// {/*        </p>*/}
// {/*    </div>*/}
// {/*</div>*/}
// SingleRoomPage.defaultProps= {
//     details: ''
// }
// SingleRoomPage.PropTypes = {
//
// }