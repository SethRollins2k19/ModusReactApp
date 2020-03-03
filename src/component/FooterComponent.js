import React from 'react'
import './style/footerStyle.sass'
import Logo from "./UI/LogoComponent"
import MainContainerComponent from "./StyleContainers/MainContainer"
import enterArrow from '../assets/keyboard-backspace.svg'
import Twitter from '../assets/twitter.svg'
import FaceBook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import {_} from "../util/util";
import {Link} from "react-router-dom";

export default class FooterComponent extends React.Component{
    render() {
        return (
            <footer className={'footer'}>
                <MainContainerComponent>
                    <section className={'footer__inner'}>
                        <FooterItem className={'footer__item'}>
                            <Logo/>
                            <div className={'footer__description'}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</div>
                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'Navigation'} items={[<Link to={`${_.defaultRouterPosition}aboutus`}>About us</Link>,<Link to={`${_.defaultRouterPosition}news`}>News</Link>,<Link to={`${_.defaultRouterPosition}documentation`}>Support</Link>,<Link to={`${_.defaultRouterPosition}room`}>Products</Link>]} />
                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'About us'} items={[<Link to={`${_.defaultRouterPosition}aboutus`}>About us</Link>]} />

                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'Support'} items={[<Link to={`${_.defaultRouterPosition}documentation`}>Support</Link>   ]} />
                        </FooterItem>
                        <FooterItem>
                            <Subscribe />
                        </FooterItem>

                    </section>
                    <CopyRight items={[Twitter,FaceBook,Instagram]}
                               alt={["twitter","facebook","instagram"]}
                               link={['#','#','#']} />
                </MainContainerComponent>
            </footer>
        );
    }
}




//top footer

function FooterItem(props){
    return(
        <div className={'footer__item'}>
            {props.children}
        </div>
    )
}

function FooterList(props){
    return(
        <article>
            <h3 className={'footer__title'}>{props.title}</h3>
            <ul className={'footer__linklist'}>
                {props.items.map((item,key)=><li key={key} className={'footer__link'}>{item}</li>)}
            </ul>
        </article>
    )
}
function Subscribe() {
    return (
        <article className={'footer__subscribe'}>
            <h3 className={'footer__title'}>Subscribe to our newsletter</h3>
            <p className={'footer__description'}>Receive our latest news and
                promotions in your inbox!</p>
            <form action="" className={'footer__form'}>
                <input type="email" placeholder={'Your email address'} className={'footer__input'} id={'SubscribeInput'}/>
                <label htmlFor={'SubscribeInput'} className={'footer__label'}><img src={enterArrow} alt=""/></label>
            </form>
        </article>
    )
}

// /top footer

// copyright


function CopyRight(props) {
    return (
        <section className={'footer__copyright'}>
            <div className={'footer__description'}>Copyright © 2018 Toxin UI Kit. All rights reserved.</div>
            <Social  items={props.items} alt={props.alt} link={props.link} />
        </section>
    )
}

function Social(props) {

    return (
        <div className={'social'}>
            {props.items.map((item,key)=>{
               return (
                   <a className={'social-icon'} key={key} href={props.link[key]}>
                       <img src={item} alt={props.alt[key]}/>
                   </a>
                   )
            })}
        </div>
    )
}
// function ifHas (item = undefined, defaultName){
//     try {
//         return (item !== undefined ? item : defaultName )
//     } catch (e) {
//         return (defaultName)
//     }
// }

// /copyright




