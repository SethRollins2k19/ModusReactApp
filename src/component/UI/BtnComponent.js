import React from 'react'
import '../style/btnStyle.sass'

export default function Btn (props) {
    const btn = <button onClick={props.btnEvent} className={'btn'} data-href={props.address}><div className={'btn__text'}>{props.title}</div></button>

    return btn
}
Btn.defaultProps = {
    btnEvent: ()=>{}
}