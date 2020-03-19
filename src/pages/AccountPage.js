//react env
import React from "react"
//components

//assets
import noAvatar from "../assets/rooms/noPict.png"
//style
import  "../component/style/AccountPageStyle.sass"
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import Banner from "../component/UI/Banner";
import Btn from "../component/UI/BtnComponent";
import {Link} from "react-router-dom";
import {_} from "../util/util";

const toNormalDate = (date) => {
    let day,month,year
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
    day = day >= 10 ? day : "0" + day.toString()
    month = month >= 10 ? month : "0" + (month)
    return `${month}/${day}/${year}`
}


export const AccountPage = ({User={name: "Denis",surname: "Freaking",email: "shots@shots.shots",orders:[0,12,33],avatar:noAvatar,isLogin: false},getLogin}) =>{
    const {name,surname,email,orders,isLogin,avatar} = User
    const ordersInfo = []
    if(!isLogin){
        // getLogin("tsum@tsum.ru","1001")
        return <Banner title="account not found" style={{display:"flex",flexDirection:"column",justifyContent:"space-around",minHeight:120 + "px"}}>
            <Link to={`${_.defaultRouterPosition}signin`}><Btn title='Please login in again'/></Link>
            <Link to={`${_.defaultRouterPosition}signup`}><Btn title='Register new account now'/></Link>
        </Banner>
    }
    return(
        <div className="account-page">
            <MainContainerComponent>
                <div className="account-page__inner">
                    <header>
                        <h1>Account info</h1>
                    </header>
                    <main>
                        <div className="account-page__info">
                            <img src={avatar? avatar : noAvatar} alt={`avatar of ${name}`} className="account-page__avatar"/>
                            <div className="account-page__personal">
                                <p><span>Email:</span>{email}</p>
                                <p><span>Name:</span>{name}</p>
                                <p><span>Surname:</span>{surname}</p>
                            </div>
                        </div>
                        <div className="account-page__orders">
                            <div className="account-page__order">
                                <p>Order №</p>
                                <p>Room</p>
                                <p>Arrived</p>
                                <p>Shipped</p>
                            </div>
                            {ordersInfo.length === 0 ?
                                <Banner title="No orders" subtitle="All ordered room will represent here"/>
                                :ordersInfo.map((item,index) => {
                                return (
                                    <div key={index} className="account-page__order">
                                        <p>{item.order}</p>
                                        <p>{item.roomName}</p>
                                        <p>{toNormalDate(item.date.startDate)}</p>
                                        <p>{toNormalDate(item.date.endDate)}</p>
                                    </div>
                            )
                            })}
                        </div>
                    </main>
                </div>
            </MainContainerComponent>
        </div>
    )
}