import React from "react"
import './ContainersStyle.sass'

export default class FormWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isTitled: (typeof this.props.title === "string")
        }
    }
    render() {
        return (
            <div className={'form-wrapper'}>
                {this.state.isTitled === true ? <p className={'form-wrapper__title'}>{this.props.title}</p> : <></>}
                {this.props.children}
            </div>
        )
    }
}