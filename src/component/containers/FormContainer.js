import React from "react"
import './ContainersStyle.sass'

export default class FormWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isTitled: props.isTitled
        }
    }
    render() {
        return (
            <div className={'form-wrapper'}>
                {this.state.isTitled === true ? <p className={'form-search__title'}>{this.props.title}</p> : <></>}
                {this.props.children}
            </div>
        )
    }
}