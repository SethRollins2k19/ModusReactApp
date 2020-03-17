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
            links: [...this.props.links]
        }
    }
    async componentDidMount() {
        await this.setState(prevState=>{
            return {
                ...prevState,
                links: prevState.links.map(item=>{
                    item = item.replace(" ",'')
                    item = _.defaultRouterPosition + (item === 'Home' ? '' : item.toLowerCase())
                    return item
                })
            }
        })
    }
    onClick = () => {
        this.setState(prevState=>{
            return {
                ...prevState,
                links: prevState.links.map(item=>{
                    item = item.replace(" ",'')
                    item = _.defaultRouterPosition + (item === 'Home' ? '' : item.toLowerCase())
                    return item
                })
            }
        })
    }

    render() {
        const links = this.state.links
        const isLogin = this.props.isLogin
        const userName = this.props.userName
        return (
            <header className={'header'}>
                <MainContainerComponent>
                   <div className="header__inner">
                        <Logo/>
                       <NavComponent locate={links} linksArr={this.props.links} isLogin={isLogin}>
                           {isLogin === false ? <div className={'btnBlock'}>
                               <Link to={`${_.defaultRouterPosition}signin`}><Btn title={'login'}/></Link>
                               <Link to={`${_.defaultRouterPosition}signup`}><Btn title={'register'}/></Link>
                           </div> : <Account name={userName}>
                           </Account>}
                       </NavComponent>
                       {isLogin?<Btn title="log out" className="logout" btnEvent={this.props.logOut}/>:""}
                       {/*{isLogin?<Btn title="log out" btnEvent={this.props.logOut}/>:""}*/}
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
    const links = props.linksArr.map((link,keys)=>{
        return <LinkComponent locate={props.locate[keys]} key={keys} linkTitle={link}/>})
    return (
        <nav className={`nav ${props.isLogin === true ? 'nav--logined' : ''}`} >
            <section className={'nav__menu'}>{links}</section>
            <section className={'nav__personalAccount'}>{props.children}</section>
        </nav>
    )
}

class LinkComponent extends React.Component{
    render() {
        // console.log(window.location.href.split('/').reverse()[0].replace('/','') === this.props.locate.replace('/',""))
        // ${window.location.href.split('/').reverse()[0].replace('/','') === this.props.locate.replace('/',"") ? "nav__link--active": null}
        return (
            <Link to={this.props.locate} className={`nav__link `}>{this.props.linkTitle}</Link>
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
            <Link to={`${_.defaultRouterPosition}account`} className={'account__link'}>{props.name}</Link>
        </div>
    )
}

