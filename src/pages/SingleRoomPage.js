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
                                    <div>
                                        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                                            <linearGradient id="linear-gradient">
                                                <stop offset="0%" stop-color="#FFE39C"/>
                                                <stop offset="100%" stop-color="#FFBA9C"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-2">
                                                <stop offset="0%" stop-color="#6FCF97"/>
                                                <stop offset="100%" stop-color="#66D2EA"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-3">
                                                <stop offset="0%" stop-color="#BC9CFF"/>
                                                <stop offset="100%" stop-color="#8BA4F9"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-4">
                                                <stop offset="0%" stop-color="#919191"/>
                                                <stop offset="100%" stop-color="#3D4975"/>
                                            </linearGradient>
                                            {/*linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)*/}
                                            {/*180deg, #6FCF97 0%, #66D2EA 100%*/}
                                            {/*#BC9CFF 0%, #8BA4F9*/}
                                            {/*180deg, #919191 0%, #3D4975 100%*/}
                                            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954"
                                                    fill="#fff">

                                            </circle>
                                            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954"
                                                    fill="transparent" stroke="#fff" stroke-width="1">

                                            </circle>
                                            {/*start circle value*/}
                                            {/*bad zone*/}
                                            {/*<circle className="donut-segment" cx="21" cy="21" r="15.91549430918954"*/}
                                            {/*        fill="transparent" stroke="url(#linear-gradient-4)" stroke-width="1"*/}
                                            {/*        stroke-dasharray="100 100" stroke-dashoffset="100">*/}

                                            {/*</circle>*/}
                                            {/*good zone*/}
                                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954"
                                                    fill="transparent" stroke="url(#linear-gradient-3)" stroke-width="1"
                                                    stroke-dasharray="24 76" stroke-dashoffset="25">

                                            </circle>
                                            {/*nice zone*/}
                                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954"
                                                    fill="transparent" stroke="url(#linear-gradient-2)" stroke-width="1"
                                                    stroke-dasharray="24 76" stroke-dashoffset="0">

                                            </circle>
                                            {/*excellent zone*/}
                                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954"
                                                    fill="transparent" stroke="url(#linear-gradient)" stroke-width="1"
                                                    stroke-dasharray="50 50" stroke-dashoffset="-25">

                                            </circle>

                                        </svg>
                                    </div>
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