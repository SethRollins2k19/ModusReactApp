import React, {useState} from "react";
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import style from "./CRMStyle.module.css";
import {CRMStatistics} from "./InnerPages/Statistics";
import {CRMOrders} from "./InnerPages/Orders";
import {CRMManagersOnline} from "./InnerPages/ManagersOnline";
import {CRMSetting} from "./InnerPages/Setting";

const PAGES = [
    <CRMStatistics/>,
    <CRMOrders/>,
    <CRMManagersOnline/>,
    <CRMSetting/>
]

const CRM = () => {
    const[nowIs, setNowIs] = useState(3);
    return(<div>
            <CRMMenu nowIs={nowIs} setNow={setNowIs}/>
            <main>
                {PAGES[nowIs]}
            </main>
    </div>)
}




function CRMMenu({nowIs, menuItems=["Statistics","Orders","Managers online","Setting"], setNow}){

    return (
        <header className={style.adminMenu}>
            <MainContainerComponent>
                <div className={style.adminMenuInner}>
                    {menuItems.map((item, index) => {
                        return (<div
                            key={index}
                            className={`${style.adminMenuItem} ${index === nowIs ? style.adminMenuItemActive : ""}`}
                            onClick={() => setNow(index)}>
                            {item}
                        </div>)
                    })}
                </div>
            </MainContainerComponent>
        </header>)
}



export {
    CRM
}