import React from 'react'
import MainContainerComponent from "../containers/mainContainer"
import './style/headerStyle.sass'
import Logo from "./logoComponent";
import Btn from "./btnComponent";
export default class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            isLogin: true,
            userName: 'None'
        }
    }
    render() {
        return (
            <header className={'header'}>
                <MainContainerComponent>
                   <header className="header__inner">
                        <Logo/>
                       <NavComponent linksArr={this.props.links} isLogin={this.state.isLogin}>
                           {this.state.isLogin === false ? <div className={'btnBlock'}>
                               <Btn title={'login'}/>
                               <Btn title={'register'}/>
                           </div> : <Account name={this.state.userName}/>}
                       </NavComponent>
                       <HamburgerMenu func={()=>{
                           this.navOpen(this.state.isOpen)
                       }}/>
                   </header>
                </MainContainerComponent>
            </header>
        );
    }
}

function NavComponent(props) {
    const links = props.linksArr.map((link,keys)=><LinkComponent key={keys} linkTitle={link}/>)
    return (
        <nav className={`nav ${props.isLogin === true ? 'nav--logined' : ''}`} >
            <section className={'nav__menu'}>{links}</section>
            <section className={'nav__personalAccount'}>{props.children}</section>
        </nav>
    )
}

function LinkComponent(props){
    return (
        <a href={"#lover"} className={'nav__link'}>{props.linkTitle}</a>
    )
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

