import React from "react"
import '../style/guestsStyle.sass'
import arrow from '../../assets/keyboard-backspace.svg'
export default class GuestsComponent extends React.Component{
    state = {
        total: 0,
        Adults : 0,
        Children : 0,
        Babies : 0,
        isOpenAdditionalMenu: false
    }

    async changeAdults (move = '-') {
        if(move === '+'  && this.state.total < 8){
           await this.setState((prevState)=>({
                Adults: prevState.Adults + 1
            }))
        }
        else if (move === '-' && this.state.Adults > 0 ){
            await this.setState((prevState)=>({
                Adults: prevState.Adults - 1
            }))
        }
        await this.setState({
            total: this.state.Adults + this.state.Babies + this.state.Children
        })
    }
    async changeChildren (move = '-') {
        if(move === '+' && this.state.total < 8){
            await this.setState((prevState)=>({
                Children: prevState.Children + 1
            }))
        } else if (move === '-' && this.state.Children > 0 ){
            await this.setState((prevState)=>({
                Children: prevState.Children - 1
            }))
        }
        await this.setState({
            total: this.state.Adults + this.state.Babies + this.state.Children
        })
    }
    async changeBabies (move = '-') {
        if(move === '+'  && this.state.total < 8){
            await this.setState((prevState)=>({
                Babies: prevState.Babies + 1
            }))
        } else if (move === '-' && this.state.Babies > 0 ){
            await this.setState((prevState)=>({
                Babies: prevState.Babies - 1
            }))
        }
        await this.setState({
            total: this.state.Adults + this.state.Babies + this.state.Children
        })
    }



    render() {
        return (
            <div className='guests'>
                <div className="guests__inner" onClick={e=>{
                    document.querySelector('.guests__param').classList.toggle('guests__param--open')
                    this.setState((prevState)=>({
                        isOpenAdditionalMenu: !prevState.isOpenAdditionalMenu
                    }))
                }}>
                    <p className='guests__title'>{this.state.total === 0 ? 'Enter the value of guests' : 'guests: '+ this.state.total}</p>
                    <img src={arrow} alt="arrow" className={`guests__arrow ${this.state.isOpenAdditionalMenu === true ? 'guests__arrow--open' : ''}`} />
                </div>
                <div className="guests__param">
                    <div className={'guests__item'}>
                        <p className='guests__title'>Adults</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${this.state.Adults === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeAdults()
                            }}>-</button>
                            {this.state.Adults}
                            <button className={`guests__button ${this.state.total === 8 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeAdults('+')
                            }}>+</button>
                        </div>
                    </div>
                    <div className={'guests__item'}>
                        <p className='guests__title'>Children</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${this.state.Children === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeChildren()
                            }}>-</button>
                            {this.state.Children}
                            <button className={`guests__button ${this.state.total === 8 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeChildren('+')
                            }}>+</button>
                        </div>
                    </div>
                    <div className={'guests__item'}>
                        <p className='guests__title'>Babies</p>
                        <div className={'guests__control'}>
                            <button className={`guests__button ${this.state.Babies === 0 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeBabies()
                            }}>-</button>
                            {this.state.Babies}
                            <button className={`guests__button ${this.state.total === 8 ? 'guests__button--enougth' : ''}`} onClick={(e)=>{
                                e.preventDefault()
                                this.changeBabies('+')
                            }}>+</button>
                        </div>
                    </div>
                    <div className='guests__item'>
                        <div className={'guests__clean'} onClick={()=>{
                            this.setState({
                                total:0,
                                Children: 0,
                                Adults: 0,
                                Babies: 0
                            })
                        }}>Clear</div>
                        <div className={'guests__accept'}>Accept</div>
                    </div>
                </div>
            </div>
        );
    }
}