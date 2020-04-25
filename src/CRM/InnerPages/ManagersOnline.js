import React from "react";
import Banner from "../../component/UI/Banner";
import MainContainerComponent from "../../component/StyleContainers/MainContainer";


const CRMManagersOnline = () => {
    return(<MainContainerComponent>
        <ManagerList/>
    </MainContainerComponent>)
}

function ManagerList ({managers = []}){
    return (
        <div className="account-page__orders">
            <div className="account-page__order">
                <p>Manager ID</p>
                <p>Name</p>
                <p>Surname</p>
                <p>Online</p>
                <p>Status</p>
            </div>
            {managers.length === 0 ?
                <Banner title="No orders" subtitle="All ordered room will represent here"/>
                : managers.map((item, index) => {
                    return (
                        <div key={index} className="account-page__order">
                            <p>{index + 1}</p>
                            <p>{item.roomName}</p>
                            <p>{(item.arrived)}</p>
                            <p>{(item.shipped)}</p>
                            <p>{(item.status)}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export {
    CRMManagersOnline
}