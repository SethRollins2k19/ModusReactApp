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
import ReviewsComponent from "../component/UI/ReviewsComponent";


const getRoom = (slug,rooms) => {
    let templateRooms = [...rooms]
    return templateRooms.find(room=> room.slug === slug)
}
const getDetails = (key ,detailsList)=>{
    let templateDetails = detailsList;
    return key in templateDetails ? templateDetails[key] : null;
}

const calcDiagram = (reviews)=>{
    let totalReviews  = Object.values(reviews).reduce((total, value)=>{
        return total + value
    })
    let avarageMassive = [];
    for(let key in reviews){
        avarageMassive.unshift((reviews[key]/totalReviews)*100);
    }
    if(avarageMassive.find(item=>item>=90)){
        let temp = avarageMassive.find(item=>item>=90);
        let countNoZero = 0;
        for(let index = 0; index < avarageMassive.length; index++){
            countNoZero += avarageMassive[index] !== 0  && avarageMassive[index] < 90 ? 1 : 0
        }
        let subTemp = countNoZero
        for (let index = 0; index < avarageMassive.length; index++){
            if(avarageMassive[index] === 0) {
                continue
            }
            avarageMassive[index] = avarageMassive[index] === temp ? 90 : (10 / subTemp)
        }
    }
    let objectMassive = []

    for(let i = 0, j = 4; i < avarageMassive.length; i++){

        let temp
        temp = {
            lengthOfLine: avarageMassive[i] - 0.5,
            revLength: 100 - (avarageMassive[i] - 0.5),
            position: objectMassive.length === 0 || i === 0 ? 24.5 : objectMassive[i - 1].position - avarageMassive[i - 1],
            value: j === 1 ? " " : `-${j}`
        }
        j--
        objectMassive.push(temp)
    }
    return objectMassive
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
        const diagramParams = calcDiagram(reviews)
        let totalReviews  = Object.values(reviews).reduce((total, value)=>{
            return total + value
        })
        const reviewsInfo = totalReviews === 0 ? <Banner title="No reviews"/> : (<div className="diagram__description">
            {reviews.excellent > 0 ? <p className='diagram__item diagram__item--excellent'>Excellent reviews</p> : null}
            {reviews.nice > 0 ? <p className='diagram__item diagram__item--nice'>Nice reviews</p>: null}
            {reviews.good > 0 ? <p className='diagram__item diagram__item--good'>Good reviews</p>: null}
            {reviews.bad > 0 ? <p className='diagram__item diagram__item--bad'>Bad reviews</p>: null}
        </div>)
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
                                        {details.map((item,index) =>{
                                            return (<DetailsInner key={index} item={item}/>)
                                        })}
                                    </div>
                                </div>
                                <div className="single-room__impressions">
                                    <h2 className='single-room__title'>Room Impressions</h2>

                                    <div className='single-room__diagram'>

                                        <svg width="100%" height="100%" viewBox="0 0 42 42" className="diagram">
                                            <linearGradient id="linear-gradient">
                                                <stop offset="0%" stopColor="#FFE39C"/>
                                                <stop offset="100%" stopColor="#FFBA9C"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-2">
                                                <stop offset="0%" stopColor="#6FCF97"/>
                                                <stop offset="100%" stopColor="#66D2EA"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-3">
                                                <stop offset="0%" stopColor="#BC9CFF"/>
                                                <stop offset="100%" stopColor="#8BA4F9"/>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-4">
                                                <stop offset="0%" stopColor="#919191"/>
                                                <stop offset="100%" stopColor="#3D4975"/>
                                            </linearGradient>
                                            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954"
                                                    fill="#fff">

                                            </circle>
                                            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954"
                                                    fill="transparent" stroke="#fff" strokeWidth="1">

                                            </circle>
                                            {/*start circle value*/}
                                            {diagramParams.map((item,index) => {
                                                    let temp;
                                                    try {
                                                        temp = (<circle key={index}
                                                                        className="donut-segment" cx="21" cy="21"
                                                                        r="15.91549430918954"
                                                                        fill="transparent" stroke={item.lengthOfLine !== -0.5 ? `url(#linear-gradient${item.value})`: "rgba(0,0,0,0)"}
                                                                        strokeWidth="1"
                                                                        strokeDasharray={`${item.lengthOfLine} ${item.revLength}`}
                                                                        strokeDashoffset={`${item.position}`}>
                                                        </circle>)
                                                    } catch (e) {
                                                        console.log(e)
                                                    }

                                                    return temp
                                            })}
                                            <g className="diagram__text">
                                                <text x="50%" y="50%" className="diagram__total">
                                                    {totalReviews}
                                                </text>
                                                <text x="50%" y="50%" className="diagram__label">
                                                    votes
                                                </text>
                                            </g>
                                        </svg>
                                        {reviewsInfo}
                                    </div>
                                </div>

                            </div>
                            <div className="reviews">
                                <header className="reviews__header">
                                    <h2 className='single-room__title'>Reviews from visitors</h2>
                                    <p>{totalReviews} reviews</p>
                                </header>
                                <ReviewsComponent/>
                            </div>
                            <div className="single-room__rules">

                            </div>>
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