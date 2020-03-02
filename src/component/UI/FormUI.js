import React from "react";
import '../style/formUIStyle.sass'

export const InputForm = ({required = true,type,hookSet,placeHolder,className="",radioValues = ["Denis"],name = "name"}) => {
    const {hook, setHook} = hookSet
    if (type === "radio") {
        return(
            <div className="radio">
                {radioValues.map((item,index)=>{
                    return (
                        <div className="input--radio" key={index}>
                            <input required={required} className={`input ${className}`} name={name} type="radio" id={`radio-index-${index}`} value={item} onChange={e=>{
                                setHook(e.target.value)
                            }} checked={hook === item ? true : false}/>
                            <label className={`label--radio`} htmlFor={`radio-index-${index}`}>{item}</label>
                        </div>
                    )
                })}
            </div>
        )
    } else if (type === "checkbox") {
        return (
            <div className="input--checkbox">
                <input required={required} className="input" id={`input--checkbox--${name}`} type="checkbox" value={hook} onChange={e=>{setHook(!hook)}}/>
                <label className="label--checkbox" htmlFor={`input--checkbox--${name}`}>{name}</label>
            </div>
        )
    } else {
        return <input required={required} className={`input ${className}`} type={type} onChange={e => setHook(e.target.value)} value={hook}
                      placeholder={placeHolder}/>
    }
}