import React from "react"
import '../style/roomStyle.sass'

export default class MiniRoomComponent extends React.Component{

    state = {

    }

    static defaultProps = {
        img: [],
        hotelRoom: 999,
        isLux: true,
        costPerDay: 9999,
        rating: 5,
        reviews: 0
    }


    render() {
        return (
            <div className={'mini-room'}>
                <img className={'mini-room__img'} src={this.props.img} alt="room"/>
                <div className="mini-room__description">
                   <p className='mini-room__item'>
                       <span className='mini-room__left'>№{this.props.hotelRoom} {this.props.isLux === true ? <span className={'mini-room__lux'}>lux</span> : ""}</span>
                       <span className='mini-room__right'>{this.props.costPerDay} pre day</span>
                   </p>
                    <p className='mini-room__item' >
                        <span className='mini-room__left'>№{this.props.hotelRoom} {this.props.isLux === true ? <span className={'mini-room__lux'}>lux</span> : ""}</span>
                        <span className='mini-room__right'>{this.props.costPerDay} pre day</span>
                    </p>
                </div>
            </div>
        );
    }
}