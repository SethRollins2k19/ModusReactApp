import React from 'react'
import './style/footerStyle.sass'
import Logo from "./logoComponent"
import MainContainerComponent from "../containers/mainContainer"
import enterArrow from '../assets/keyboard-backspace.svg'



export default class FooterComponent extends React.Component{
    render() {
        return (
            <div className={'footer'}>
                <MainContainerComponent>
                    <section className={'footer__inner'}>
                        <FooterItem className={'footer__item'}>
                            <Logo/>
                            <div className={'footer__description'}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</div>
                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'Navigation'} items={['About Us','News','Support','Products']}></FooterList>
                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'About us'} items={['Who we are','Our team','Careers','Investors']}></FooterList>

                        </FooterItem>
                        <FooterItem>
                            <FooterList title={'Support'} items={['Documentation','Community','Get in Touch']}></FooterList>
                        </FooterItem>
                        <FooterItem>
                            <Subscribe/>
                        </FooterItem>

                    </section>
                    <CopyRight/>
                </MainContainerComponent>
            </div>
        );
    }
}



function CopyRight() {
    return (
        <section className={'footer__copyright'}>

        </section>
    )
}


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