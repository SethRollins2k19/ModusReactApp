import React from "react"
import {Link} from "react-router-dom";
import MainContainerComponent from "../component/containers/MainContainer";

export default function Page404 (){
    return (
        <MainContainerComponent>
            <div className={'page-404'}>
                <h1 className={`page-404__title ${window.location.href.length > 30 ? 'page-404__title--long' : ''}`}>
                    link {window.location.href} not found
                </h1>
                <p className='page-404__subtitle'>I'm sorry, we make this page functional soon</p>
            </div>
        </MainContainerComponent>
    )
}