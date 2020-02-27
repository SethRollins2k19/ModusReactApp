import React from 'react'
import { Link } from 'react-router-dom'
import MainContainerComponent from "./StyleContainers/MainContainer"
import './style/headerStyle.sass'
import Logo from "./UI/LogoComponent";
import Btn from "./UI/BtnComponent";
import {_} from "../util/util";


export default class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            isLogin: false,
            userName: 'None'
        }
    }
    render() {
        return (
            <header className={'header'}>
                <MainContainerComponent>
                   <div className="header__inner">
                        <Logo/>
                       <NavComponent locate={this.props.links.map(item=>{
                           item = item.replace(" ",'')
                           item = _.defaultRouterPosition + (item === 'Home' ? '' : item)
                           return item.toLowerCase()
                       })} linksArr={this.props.links} isLogin={this.state.isLogin}>
                           {this.state.isLogin === false ? <div className={'btnBlock'}>
                               <Btn title={'login'}/>
                               <Btn title={'register'}/>
                           </div> : <Account name={this.state.userName}/>}
                       </NavComponent>
                       <HamburgerMenu func={()=>{
                           this.navOpen(this.state.isOpen)
                       }}/>
                   </div>
                </MainContainerComponent>
            </header>
        );
    }
}

function NavComponent(props) {
    const links = props.linksArr.map((link,keys)=><LinkComponent locate={props.locate[keys]} key={keys} linkTitle={link}/>)
    return (
        <nav className={`nav ${props.isLogin === true ? 'nav--logined' : ''}`} >
            <section className={'nav__menu'}>{links}</section>
            <section className={'nav__personalAccount'}>{props.children}</section>
        </nav>
    )
}

class LinkComponent extends React.Component{
    static defaultProps = {
        locale: ''
    }
    render() {
        return (
            <Link to={this.props.locate} className={'nav__link'}>{this.props.linkTitle}</Link>
        )
    }
}
function HamburgerMenu (props) {
    function handelClick(){
        let nav = document.querySelector('.nav')
        nav.classList.toggle('nav--opened')
    }
    return (
        // onClick={()=>{navOpen(this.state.isOpen)}}
        <div className={'hamburgerMenu'} onClick={handelClick}>
            <div className={'hamburgerMenu__inner'}>

            </div>
        </div>
    )
}
function Account(props){
    return(
        <div className={'account'}>
            <a href={'#account'} className={'account__link'}>{props.name}</a>
        </div>
    )
}

