import React from "react"
import MainContainerComponent from "../component/containers/MainContainer";
import RoomSearch from "../component/UI/RoomSearch";

export default class HomePage extends React.Component{
    render() {
        return (
            <div className={'home-page'}>
                <MainContainerComponent>
                    <RoomSearch />
                </MainContainerComponent>
            </div>
        );
    }
}