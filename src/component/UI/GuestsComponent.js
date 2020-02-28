import React from "react"
import '../style/guestsStyle.sass'
import arrow from '../../assets/keyboard-backspace.svg'
export default class GuestsComponent extends React.Component{
    state = {
        isOpenAdditionalMenu: false
    }

    render() {
        // const maxTotal = this.state.maxTotal
        const {guest,setGuest} = this.props.guests
        const accept = this.props.accept
        const {maxTotal, total = 0, Adults, Children, Babies} = guest
        return (
            <div className='guests'>
                <div className="guests__inner" onClick={e=>{
                    document.querySelector('.guests__param').classList.toggle('guests__param--open')
                    this.setState((prevState)=>({
                        isOpenAdditionalMenu: !prevState.isOpenAdditionalMenu
                    }))
                }}>
                    <p className='guests__title'>{total === 0 ? 'Enter the value of guests' : 'guests: '+ total}</p>
                    <img src={arrow} alt="arrow" className={`guests__arrow ${this.state.isOpenAdditionalMenu === true ? 'guests__arrow--open' : ''}`} />
                </div>
                <div className="guests__param">
                    <div className={'guests__item'}>
                        <p className='guests__title'>Adults</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${Adults === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                if(Adults !== 0) {
                                    setGuest(prevState => {
                                        return {
                                            ...prevState,
                                            total: prevState.total - 1,
                                            Adults: Adults - 1
                                        }
                                    })
                                }
                            }}>-</button>
                            {Adults}
                            <button className={`guests__button ${total === maxTotal ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                // this.changeAdults('+')
                                if(total !== maxTotal){
                                    setGuest(prevState=>{
                                        return {
                                            ...prevState,
                                            total: prevState.total + 1,
                                            Adults: Adults + 1
                                        }
                                    })
                                }
                            }}>+</button>
                        </div>
                    </div>
                    <div className={'guests__item'}>
                        <p className='guests__title'>Children</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${Children === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                // this.changeChildren()
                                if(Children !== 0) {
                                    setGuest(prevState => {
                                        return {
                                            ...prevState,
                                            total: prevState.total - 1,
                                            Children: Children - 1
                                        }
                                    })
                                }
                            }}>-</button>
                            {Children}
                            <button className={`guests__button ${total === maxTotal ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                // this.changeChildren('+')
                                if(total !== maxTotal) {
                                    setGuest(prevState => {
                                        return {
                                            ...prevState,
                                            total: prevState.total + 1,
                                            Children: Children + 1
                                        }
                                    })
                                }
                            }}>+</button>
                        </div>
                    </div>
                    <div className={'guests__item'}>
                        <p className='guests__title'>Babies</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${Babies === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                // this.changeBabies()
                                if(Babies !== 0 ) {
                                    setGuest(prevState => {
                                        return {
                                            ...prevState,
                                            total: prevState.total - 1,
                                            Babies: Babies - 1
                                        }
                                    })
                                }
                            }}>-</button>
                            {Babies}
                            <button className={`guests__button ${total === maxTotal ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                // this.changeBabies('+')
                                if(total !== maxTotal) {
                                    setGuest(prevState => {
                                        return {
                                            ...prevState,
                                            total: prevState.total + 1,
                                            Babies: Babies + 1
                                        }
                                    })
                                }
                            }}>+</button>
                        </div>
                    </div>
                    <div className='guests__item'>
                        <div className={'guests__clean'} onClick={()=>{
                            setGuest(prevState=>{
                                return {
                                    ...prevState,
                                    total: 0,
                                    Adults: 0,
                                    Children: 0,
                                    Babies: 0
                                }
                            })
                        }}>Clear</div>
                        <div className={'guests__accept'} onClick={() => {
                            document.querySelector('.guests__param').classList.toggle('guests__param--open')
                            this.setState((prevState) => ({
                                isOpenAdditionalMenu: !prevState.isOpenAdditionalMenu
                            }))
                            try {

                                if (accept !== "undefined ") {
                                    accept(guest)
                                }
                            } catch (e) {

                            }
                        }
                        }
                        >Accept</div>
                    </div>
                </div>
            </div>
        );
    }
}