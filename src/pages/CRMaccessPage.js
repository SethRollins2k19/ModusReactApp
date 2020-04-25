import React, {useState} from "react";
import {useSelector} from "react-redux";
import {CRM} from "../CRM/CRM";


export const CRMaccessPage = ()=>{
    const role = useSelector(state => state.User.role)
    return(
        <div>
            {role === "admin"?<CRM/>:"access denied"}
        </div>
    )
}