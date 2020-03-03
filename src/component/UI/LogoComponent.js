import React from 'react'
import logo from '../../assets/logo.svg'
import {_} from "../../util/util";
import {Link} from "react-router-dom";

export default function Logo (props) {
    return (<Link to={_.defaultRouterPosition}><div className={'logo'}><img src={logo} alt="logo"/></div></Link>)
}