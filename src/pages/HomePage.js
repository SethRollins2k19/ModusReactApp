import React from "react"
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import '../component/style/homePage.sass'
import bg1 from '../assets/background-1.png'
import bg2 from '../assets/background-2.png'
import bg3 from '../assets/background-3.png'
import RoomSearchComponentContainer from "../containers/RoomSearchComponentContainer";
export default class HomePage extends React.Component {
    state = {
        bgTimer: '',
        bgImgs: [bg1,bg2,bg3]
    }

    componentDidMount() {
        document.querySelector('.home-page').style.backgroundImage = `url('${this.state.bgImgs[Math.floor(Math.random() *3)]}')`
    }

    render() {
        return (
            <div className={'home-page'}>
                <MainContainerComponent>
                    <RoomSearchComponentContainer/>
                </MainContainerComponent>
            </div>
        );
    }
}