import React from "react";
import {OrderList} from "../../pages/AccountPage";
import MainContainerComponent from "../../component/StyleContainers/MainContainer";


const CRMOrders = () => {
    return(<MainContainerComponent>
        <OrderList/>
    </MainContainerComponent>)
}



export {
    CRMOrders
}