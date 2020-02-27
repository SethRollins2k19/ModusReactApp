import React from "react"
import "../style/heroStyle.sass"


export const Hero = ({title,subtitle,children})=>{
    return (
        <div className="hero">
            <h1 className="hero__title">
                {title}
            </h1>
            <p className="hero__subtitle">
                {subtitle}
            </p>
            {children?
                <div>
                    {children}
                </div>
            :
                null
            }
        </div>
    )
}