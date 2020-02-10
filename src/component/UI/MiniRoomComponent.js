import React from "react"
import '../style/roomStyle.sass'
import Rating from "./Rating";
import PropTypes from '../../../node_modules/prop-types'
import noImg from '../../assets/rooms/noPict.png'
import {Link} from "react-router-dom";
import {_} from "../../util/util";

export default class MiniRoomComponent extends React.Component{
    render() {
        return (
            <Link to={`${_.defaultRouterPosition}room/${this.props.slug}`}>
            <div className={'mini-room'}>
                <img className={'mini-room__img'} src={this.props.img[0] === null ? noImg : this.props.img[0]} alt="room"/>
                <div className="mini-room__description">
                   <div className='mini-room__item'>
                       <span className='mini-room__left'>№ {this.props.hotelRoom} {this.props.isLux === true ? <span className={'mini-room__lux'}>lux</span> : ""}</span>
                       <span className='mini-room__right'><span className="mini-room__value">${this.props.costPerDay}</span> per day</span>
                   </div>
                    <div className='mini-room__item' >
                        <Rating rating={this.props.rating}/>
                        <span className='mini-room__right'><span className="mini-room__value">{this.props.reviews}</span> reviews</span>
                    </div>
                </div>
            </div>
            </Link>
        );
    }
}

MiniRoomComponent.defaultProps = {
    slug: "None",
    img: noImg,
    hotelRoom: 999,
    isLux: true,
    costPerDay: 9999,
    rating: 3,
    reviews: 0
}
MiniRoomComponent.propTypes = {
    slug: PropTypes.string.isRequired,
    img: PropTypes.string,
    hotelRoom: PropTypes.number.isRequired,
    isLux: PropTypes.bool,
    costPerDay: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number
}
